<template>
    <div
        class="bg-gray-50 bg-opacity-5 backdrop-blur-lg backdrop-saturate-150 border rounded border-white flex flex-col h-full">
        <ChatHead
            :gameMode="gameMode"
            :wordLength="wordLength"
            :temp="temp"
            @changeGameMode="changeGameMode" />
        <ChatBody :words="words" :guessedCount="guessedCount" :gameMode="gameMode"/>
        <ChatBottom :gameMode="gameMode" @handleSubmit="handleSubmit" />
    </div>
</template>

<script lang="ts" setup>
interface Word {
    word: string
    guess: boolean
    len: number
    cipher: string
}

const words: Ref<Word[]> = ref([])
const gameMode = ref('input')

const wordLength = computed(() => words.value.length)
const guessedCount = computed(() =>
    words.value.reduce((acc, w) => (w.guess ? acc + 1 : acc), 0),
)
const nextWordToGuess = computed(
    () =>
        words.value[
            words.value.length - words.value.filter((w) => w.guess).length - 2
        ],
)
//TODO: add cipher animation https://vuejs.org/guide/extras/animation.html#animation-techniques

const temp = ref('')
const changeGameMode = () => {
    gameMode.value === 'input'
        ? (gameMode.value = 'guess')
        : (gameMode.value = 'input')
}
const { generateRandomString } = useUtilities()
const handleSubmit = (word: string) => {
    if (gameMode.value === 'input') {
        words.value.push({
            word,
            guess: false,
            len: word.length,
            cipher: generateRandomString(word.length),
            
        })
    } else {
        if (word === nextWordToGuess.value.word) {
            nextWordToGuess.value.guess = true
            temp.value = 'correct'
        } else {
            temp.value = 'guess again'
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
