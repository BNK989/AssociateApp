<template>
    <div
        class="backdrop-blur-lg backdrop-saturate-150 border rounded border-white flex flex-col h-full">
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

import { createClient } from '@supabase/supabase-js'

const route = useRoute()
const { generateRandomString } = useUtilities()
const gameId = route.params.gameid
const store = useStore()
const { user: storeUser } = storeToRefs(store)

useHead({
    title: 'Chat' + gameId || ''
})

interface Word {
    id: number
    createdAt: Date
    content: string
    cipher: string
    isResolved: boolean
    senderId: string
}

const messages = ref<Word[] | null>([])

const loadMessages = async () => {
    console.log('loading messages for game', gameId)
    try{
        const data = await $fetch(`/api/message/${gameId}`)
        if(!data) throw new Error('could not load messages')

        //@ts-ignore
        messages.value = data
    }
    catch(err){
    console.error("there was an error", err)
    }
}
        
const user = useSupabaseUser()
const supabase = useSupabaseClient()

const gameMode = ref('input')
const feedback = ref('')
const guessedCount = computed(() => messages.value?.reduce((acc, w) => (w.isResolved ? acc + 1 : acc), 0))

const nextWordToGuess = computed(
    /* @ts-ignore */
    () => messages.value[messages.value.length - guessedCount.value - 2],
)
    
// TODO load users in game 
const { data: users } = await useFetch(`/api/user/${gameId}`)
// TODO GameMode should be in db

const changeGameMode = () => {
    gameMode.value === 'input'
    ? (gameMode.value = 'guess')
    : (gameMode.value = 'input')
}
      
//TODO: add cipher animation https://vuejs.org/guide/extras/animation.html#animation-techniques
let realtimeChannel //: RealtimeChannel

const handleSubmit = (word: string) => {
    if (gameMode.value === 'input') addWord(word)
    else guessWord(word)

    // else {
    //     if (word === nextWordToGuess.value.word) {
    //         /* @ts-ignore */
    //         guessedCount.value++
    //         nextWordToGuess.value.guess = true
    //         feedback.value = 'correct'
    //     } else {
    //         feedback.value = 'guess again'
    //     }
    // }
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
        wordId: nextWordToGuess.value.id
    }

    try{
        const res = await $fetch(`/api/message/guess`, {
            method: 'PUT',
            body,
        })
        if (!res) throw new Error('could not guess word')
        else feedback.value = 'Correct'
    
    }
    catch(err){
        console.error("there was an error", err)
        feedback.value = 'Guess Again'
    }
}
// const { data: asyncMessages } = await useAsyncData('messages', async () => {
//   const { data } = await supabase.from('messages').select('id, contents, cipher')//.eq('id', 1).order('created_at')
//     console.log('asyncMessages', data)
//   return data
// })


// ****** MY FUNCTION START ******
onMounted(() => {
    loadMessages();
    realtimeChannel = supabase
        .channel('public:Messages')
        .on('postgres_changes', { 
            event: '*',
            schema: 'public',
            table: 'Messages',
            filter: `gameId=eq.${gameId}`
        },
        (payload) => {
            console.log('payload', payload)
            // loadMessages()
            if (payload.eventType === 'INSERT') messages.value.push(payload?.new as Word)
            else loadMessages()
        })

    realtimeChannel.subscribe()
})

console.log('realtimeChannel:', realtimeChannel)

onUnmounted(() => {
    supabase.removeChannel(realtimeChannel)
})

// ****** MY FUNCTION END ******

// ********** GPT FUNCTION START **********
// onMounted(() => {
//     const supabase = createClient('https://kyaoiarnnjcubothnkpy.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt5YW9pYXJubmpjdWJvdGhua3B5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTgwMTU4MTYsImV4cCI6MjAzMzU5MTgxNn0.SSGhZVQ_adAm01U6VUDl-W-gvfT4WJ8dgvUyY4Fcu0w'); // Ensure you have initialized Supabase client

//     const realtimeChannel = supabase
//         .channel('public:Messages')
//         .on('postgres_changes', { 
//             event: '*',
//             schema: 'public',
//             table: 'Messages'
//         }, 
//         (payload) => {
//             console.log('payload', payload);
//         });

//     realtimeChannel.subscribe()
//         .on('SUBSCRIBED', () => {
//             console.log('Subscribed to realtime updates for Messages');
//         })
//         .on('ERROR', (error) => {
//             console.error('Subscription error:', error);
//         });
// });
// ********** GPT FUNCTION START **********

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