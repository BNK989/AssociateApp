<template>
    <div
        class="bg-gray-50 bg-opacity-5 backdrop-blur-lg backdrop-saturate-150 border rounded border-white flex flex-col h-full">
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
const route = useRoute()
const { generateRandomString } = useUtilities()
const gameId = route.params.gameid

interface Word {
    id: number
    createdAt: Date
    content: string
    cipher: string
    isResolved: boolean
    senderId: string
    }
    
    const {data: messages, error: messagesError} = await useFetch(`/api/message/${gameId}`)
    
    const user = useSupabaseUser()
    const supabase = useSupabaseClient()
    
    const gameMode = ref('input')
    const feedback = ref('')
    const guessedCount = computed(() => messages.value?.reduce((acc, w) => (w.isResolved ? acc + 1 : acc), 0))
    
    const nextWordToGuess = computed(
        /* @ts-ignore */
        () => words.value[words.value.length - guessedCount.value - 2],
        )
        
        // TODO load users in game 
        const { data: users } = await useFetch(`/api/user/${gameId}`)
        // TODO GameMode should be in db

    const changeGameMode = () => {
        gameMode.value === 'input'
        ? (gameMode.value = 'guess')
        : (gameMode.value = 'input')
        }
        // const words: Ref<Word[] | any> = ref([])
        // words.value = messages.value
        // LOAD GAME IF IT EXISTS
        // const { data } = await useFetch('/api/999/full-game')
// words.value = data.value?.messages
// words.value = data.value?.messages

// subscribe to any change in the game
// const channelA = supabase
// .channel('update-any')
// .on(
//     'postgres_changes',
//         {
//             event: 'UPDATE',
//             schema: 'public',
//             table: 'Game',
//             // filter: 'id=eq.999'
//         },
//         (payload) => {
//             const eventType = payload.eventType
//             const newRecord = payload.new
//             const oldRecord = payload.old //retruns id of old record
//             console.log('43payload:', payload.errors[0])

//             /* @ts-ignore */
//             // words.value = payload.new.messages
//         },
//     )
//     .subscribe()

// /* @ts-ignore */
// const { data, error } = await supabase.auth.getSession()

// if (error) {
//   console.error('Error getting session:', error)
//   await supabase.auth.signInWithPassword({
//     email: 'your-email@example.com',
//     password: 'your-password'
//   })
// } else {
//     /* @ts-ignore */
//   data.user.value = authenticatedUser
// }


// const channelA = supabase
//   .channel('update-any')
//   .on(
//     'postgres_changes',
//     {
//       event: 'UPDATE',
//       schema: 'public',
//       table: 'Game',
//     },
//     (payload) => {
//       console.log('43payload:', payload)
//     }
//   )
//   .subscribe((status) => {
//     if (status === 'SUBSCRIBED') {
//       console.log('Subscribed to the channel successfully')
//     } else if (status === 'CHANNEL_ERROR') {
//       console.error('Channel error occurred')
//     } else if (status === 'TIMED_OUT') {
//       console.error('Subscription timed out')
//     }
//   })

// console.log('posts:', posts.new.messages)


// const wordLength = computed(() => words.value.length)
/* @ts-ignore */
// const wordLength = ref(data.value?.total_words)
// const guessedCount = computed(() =>
//     words.value.reduce((acc, w) => (w.guess ? acc + 1 : acc), 0),
// )

/* @ts-ignore */
// console.log('guessedCount.value:', guessedCount.value)
//TODO: add cipher animation https://vuejs.org/guide/extras/animation.html#animation-techniques

const handleSubmit = async (word: string) => {
    if (gameMode.value === 'input') {
        // GO TO API POST
        const body = {
            word,
            sender: {
                id: user.value?.id,
                name: user.value?.user_metadata?.name,
                img: user.value?.user_metadata?.avatar_url,
            },
            guess: false,
            len: word.length,
            cipher: generateRandomString(word.length),
        }

        try {
            const res = await $fetch(`/api/${999}/message`, {
                method: 'POST',
                body,
            })
            if (!res) throw new Error('could not add word')
        } catch (err) {
            console.error('there was an error', err)
        }
    } else {
        if (word === nextWordToGuess.value.word) {
            /* @ts-ignore */
            guessedCount.value++
            nextWordToGuess.value.guess = true
            feedback.value = 'correct'
        } else {
            feedback.value = 'guess again'
        }
    }
}
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
