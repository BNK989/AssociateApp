<template>
    <!-- <pre @click="playSound('nudge')">test</pre> -->
    <div
        class="backdrop-blur-lg backdrop-saturate-150 md:border rounded md:border-accent-3/25 flex flex-col h-full">
        <ChatHead
            :gameMode="gameMode"
            :wordLength="messages?.length || 0"
            :feedback="feedback"
            :TurnOrderByIds="TurnOrderByIds"
            @changeGameMode="changeGameMode" />
        <ChatBody
            :words="messages as any"
            :users="users as any"
            :guessedCount="guessedCount"
            :gameMode="gameMode"
            :nextPlayerId="nextTurnId"
            :scrollTo="scrollTo" />
        <ChatBottom
            :gameMode="gameMode"
            :nextPlayerId="nextTurnId"
            @handleSubmit="handleSubmit" />
    </div>
</template>

<script lang="ts" setup>
import type { Word } from '@/types/word'
import type { Game } from '@/types/game'
import { createClient } from '@supabase/supabase-js'
// import { checkWin } from '@/services/checkGame'
import VueConfetti from 'vue-confetti'

const route = useRoute()
const { generateRandomString } = useUtilities()
const gameId = route.params.gameid
const game: Game | any = ref({})
const gameMode = computed(() => game.value.GameMode)
const feedback = ref('')
const scrollTo = ref(0)
const store = useStore()
const { user: storeUser, game: storeGame } = storeToRefs(store)
const user = useSupabaseUser()
const supabase = useSupabaseClient()

const messages = ref<Word[] | null>([])
//reactive no ref

const { appContext } = getCurrentInstance()
appContext.app.use(VueConfetti)
const getConfetti = () => {
    // https://www.npmjs.com/package/vue-confetti
    // @ts-ignore
    appContext.config.globalProperties.$confetti.start()
    // @ts-ignore
    setTimeout(() => appContext.config.globalProperties.$confetti.stop(), 9000)
}

const playSound = async (fileName: string) => {
    if (!store.userPref?.soundOn) return
    //@ts-ignore
    const audioPath = await import(`../assets/audio/${fileName}.mp3`)
    const audio = new Audio(audioPath.default)
    audio.play()
}

const TurnOrderByIds = computed(() => {
    const msgsBySender = messages.value.map((m) => m.senderId).reverse()
    const unique = [...new Set(msgsBySender)]
    if (unique.length < game.value.players?.length) {
        const newMap = game.value.players?.map((p) => p.id)
        const played = newMap.filter((p) => unique.includes(p))
        const didNotPlayed = newMap.filter((p) => !unique.includes(p))
        return [...played, ...didNotPlayed]
    }
    return unique
})

const nextTurnId = computed(() => {
    if (!game.value) return ''
    const PlayersCount = game.value.players?.length - 1
    return TurnOrderByIds.value[PlayersCount]
})

const isMyTurn = computed(() => {
    return user.value?.id === nextTurnId.value
})

watch(
    () => nextTurnId.value,
    () => {
        if (
            storeUser.value?.id === nextTurnId.value &&
            game.value.players?.length > 1
        )
            nudge(true)
        else nudge(false)
    },
)
const nudgeInterval = ref()
const nudge = (isOn: boolean) => {
    if (nudgeInterval.value || !isOn) {
        clearInterval(nudgeInterval.value)
    } else {
        store.setToast({
            msg: 'Your turn',
            type: 'info',
            duration: 99999,
        })
        nudgeInterval.value = setInterval(() => {
            playSound('nudge')
        }, 1000 * 30)
    }
}

const loadMessages = async () => {
    try {
        const data = await $fetch(`/api/message/${gameId}`)
        if (!data) throw new Error('could not load messages')

        //@ts-ignore
        messages.value = data
    } catch (err) {
        console.error('there was an error', err)
    }
}
const loadGame = async () => {
    try {
        // @ts-ignore
        const data = (await $fetch(`/api/${gameId}/full-game`)) as Game
        if (!data) throw new Error('could not load messages')
        game.value = data
        if (
            game.value.GameMode === 'SOLVE_PENDING' &&
            !game.value.confirmChange.includes(storeUser.value.id)
        )
            confirmSolve()
        document.title = 'Chat' + ' ' + game.value.title || ''
        store.setGame(data)
    } catch (err) {
        console.error('there was an error', err)
    }
}

const guessedCount = computed(() =>
    messages.value?.reduce((acc, w) => (w.isResolved ? acc + 1 : acc), 0),
)

const nextWordToGuess = computed(
    /* @ts-ignore */
    () => messages.value[messages.value.length - guessedCount.value - 2],
)

// TODO load users in game
const loadUsers = async () => {
    if (!gameId) return console.warn('no gameId at loadUsers')
    const { data } = await useFetch(`/api/user/by/${gameId}`, {
        method: 'GET',
    })
    return data
}
const users = await loadUsers()
// TODO GameMode should be in db

const changeGameMode = async () => {
    //@ts-ignore
    // const changeTo = game.value.GameMode === 'INPUT' ? 'SOLVE' : 'INPUT'
    $fetch(`/api/${gameId}/toggle-mode`, {
        method: 'PUT',
        body: {
            gameMode:
                game.value.players?.length === 1 ? 'SOLVE' : 'SOLVE_PENDING',
            senderId: storeUser.value.id,
        },
    })
}

//TODO: add cipher animation https://vuejs.org/guide/extras/animation.html#animation-techniques
let realtimeChannel

const handleSubmit = (word: string) => {
    if (gameMode.value === 'INPUT') addWord(word)
    else guessWord(word)
}

async function addWord(word: string) {
    const body = {
        content: word,
        cipher: generateRandomString(word.length),
        gameId,
        senderId: storeUser.value.id,
    }

    try {
        const res = await $fetch(`/api/message/send`, {
            method: 'POST',
            body,
        })
        if (!res) throw new Error('could not add word')
    } catch (err) {
        console.error('there was an error', err)
    }
}

async function guessWord(word: string) {
    const body = {
        guess: word,
        wordId: nextWordToGuess.value.id,
    }

    try {
        const res = await $fetch(`/api/message/guess`, {
            method: 'PUT',
            body,
        })
        if (!res) throw new Error('could not guess word')
        else feedback.value = 'Correct'
    } catch (err) {
        console.warn('No match found', err)
        feedback.value = 'Guess Again'
        store.setToast({ msg: 'Guess Again', type: 'oops', duration: 2000 })
    }
}

onMounted(() => {
    loadMessages()
    loadGame()
    realtimeChannel = supabase
        .channel('public:Messages')
        .on(
            'postgres_changes',
            {
                event: '*',
                schema: 'public',
                table: 'Messages',
                filter: `gameId=eq.${gameId}`,
            },
            (payload) => {
                if (payload.eventType === 'INSERT') {
                    const newWord = payload?.new as Word
                    messages.value.push(newWord)
                    playSound('sent')
                } else {
                    // @ts-ignore
                    if (payload.new.isResolved) {
                        const payloadWord = payload?.new as Word
                        playSound('correct')
                        // @ts-ignore
                        scrollTo.value = payloadWord.id
                        const idx = messages.value.findIndex(
                            // @ts-ignore
                            (w) => w.id === payloadWord.id,
                        )
                        messages.value[idx].isResolved = true
                        messages.value[idx].content = payloadWord?.content
                        store.setScore(100)
                        // checkWin(messages.value)
                    } else {
                        playSound('wrong')
                    }
                }
            },
        )
        .on(
            'postgres_changes',
            {
                event: 'UPDATE',
                schema: 'public',
                table: 'Games',
                filter: `id=eq.${gameId}`,
            },
            (payload) => {
                const payloadNew = payload?.new as Game
                console.log('payload:', payloadNew)
                if (
                    payloadNew.GameMode === 'SOLVE_PENDING' &&
                    !payloadNew.confirmChange.includes(storeUser.value.id)
                ) {
                    confirmSolve() // TODO: ADD USER ID/EMAIL TO TELL THE OTHER PLAYERS WHO WANTS THE CHANGE
                }
                if (
                    payloadNew.totalWords === 0 &&
                    payloadNew.status === 'FINISHED'
                ) {
                    console.log('game ended!')
                    getConfetti()
                }
                game.value.GameMode = payloadNew.GameMode
            },
        )

    realtimeChannel.subscribe()
})

// console.log('realtimeChannel:', realtimeChannel)
const confirmSolve = async () => {
    const isConfirm = confirm(
        'A player want to start solving the game, do you agree?',
    )
    if (isConfirm) {
        await $fetch(`/api/${gameId}/confirm-solve`, {
            //@ts-ignore
            method: 'PUT',
            body: {
                senderId: storeUser.value.id,
            },
        })
    } else {
        await $fetch(`/api/${gameId}/toggle-mode`, {
            //@ts-ignore
            method: 'PUT',
            body: {
                gameMode: 'INPUT',
                senderId: storeUser.value.id,
                resetConfirmChange: true,
            },
        })
    }
}

onUnmounted(() => {
    if (realtimeChannel) supabase.removeChannel(realtimeChannel)
    store.setGame(null)
    document.title = 'Associate Game'
    if (nudgeInterval.value) clearInterval(nudgeInterval.value)
})
</script>
<!-- backdrop-blur-lg bg-myBlue md:rounded-xl backdrop-saturate-150 border border-myWhite flex w-dvw h-dvh md:w-[80vw] md:h-[90dvh] -->
<style>
.list-enter-active,
.list-leave-active {
    transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}

/* Set the scroll bar to be more like a modem */
/* ::-webkit-scrollbar {
  width: 10px;
  height: 10px;
} */

::-webkit-scrollbar-track {
    background-color: var(--color-scrollbar-track);
}

::-webkit-scrollbar-thumb {
    background-color: var(--color-scrollbar-thumb);
    border-radius: 10px;
    border: 2px solid var(--color-scrollbar-track);
}
</style>
