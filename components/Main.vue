<template>
    <!-- <pre>2{{ messages }}</pre> -->
    <div
        class="backdrop-blur-lg backdrop-saturate-150 md:border rounded md:border-white flex flex-col h-full">
        <ChatHead
            :gameMode="gameMode"
            :wordLength="messages?.length"
            :feedback="feedback"
            @changeGameMode="changeGameMode" />
        <!-- <pre>{{ users }}</pre> -->
        <ChatBody
            :words="messages as any"
            :users="users as any"
            :guessedCount="guessedCount"
            :gameMode="gameMode" />
        <!-- <pre>{{ guessedCount }}</pre> -->
        <ChatBottom :gameMode="gameMode" @handleSubmit="handleSubmit" />
    </div>
</template>

<script lang="ts" setup>
import type { Word } from '@/types/word'
import { createClient } from '@supabase/supabase-js'

const route = useRoute()
const { generateRandomString } = useUtilities()
const gameId = route.params.gameid
const game = ref({})
const gameMode = computed(() => game.value.GameMode)
const feedback = ref('')
const store = useStore()
const { user: storeUser } = storeToRefs(store)


const messages = ref<Word[] | null>([])

const playSound = async (fileName: string) => {
        //@ts-ignore
        const audioPath = await import(`../assets/audio/${fileName}.mp3`)
        const audio = new Audio(audioPath.default)
        audio.play();
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
        const data = await $fetch(`/api/${gameId}/full-game`)
        if (!data) throw new Error('could not load messages')
        game.value = data
        useHead({
            title: 'Chat' + ' ' + game.value.title || '',
        })
    } catch (err) {
        console.error('there was an error', err)
    }
}

const user = useSupabaseUser()
const supabase = useSupabaseClient()


const guessedCount = computed(() =>
    messages.value?.reduce((acc, w) => (w.isResolved ? acc + 1 : acc), 0),
)

const nextWordToGuess = computed(
    /* @ts-ignore */
    () => messages.value[messages.value.length - guessedCount.value - 2],
)

// TODO load users in game
const { data: users } = await useFetch(`/api/user/${gameId}`)
// TODO GameMode should be in db

const changeGameMode = async () => {
    //@ts-ignore
    const changeTo = game.value.GameMode === 'INPUT' ? 'SOLVE' : 'INPUT'
    $fetch(`/api/${gameId}/toggle-mode`, {
        method: 'PUT',
        body: {
            gameMode: changeTo
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
        console.error('there was an error', err)
        feedback.value = 'Guess Again'
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
                messages.value.push(payload?.new as Word)
                playSound('sent')
                } else {
                loadMessages()
                playSound('correct')
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
        },(payload) => {
            loadGame()
        }
    )

    realtimeChannel.subscribe()
})

console.log('realtimeChannel:', realtimeChannel)

onUnmounted(() => {
    supabase.removeChannel(realtimeChannel)
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
