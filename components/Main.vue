<template>
    <div
        class="bg-gray-50 bg-opacity-5 backdrop-blur-lg backdrop-saturate-150 border rounded border-white flex flex-col h-full">
        <section class="border border-white min-h-8 flex items-center justify-around">
            <p>Game Mode : {{ gameMode }}</p>
            <p>Word Length : {{ wordLength }}</p>
            <p>{{ temp }}</p>
            <button class="px-3 py-2 bg-blue-600 my-2 rounded-full" @click="changeGameMode">change game mode</button>
        </section>
        <section class="relative border border-blue-600 h-full overflow-y-scroll overflow-x-hidden">
            <TransitionGroup name="list" tag="ul" class="flex flex-col gap-3 my-2">
                <li v-for="(w ,i) in words" :key="w" class="flex items-center ms-2 gap-1">
                    <SvgCheckMark v-if="w.guess"/>
                    <p class="px-3 py-2 bg-blue-300 bg-opacity-10 w-min whitespace-nowrap" :class="i === words.length -2 ? 'font-bold' : '' " v-if="i < words.length -1">
                        {{ w.guess ? w.word : w.cipher }}</p>
                    <p class="px-3 py-2 bg-blue-300 bg-opacity-10 w-min" v-else>{{ w.word }}</p>
                </li>
            </TransitionGroup>
            <!-- <pre>{{ words }}</pre> -->
            <!-- <pre>{{ guessedWords }}</pre> -->
            <!-- <pre>{{ nextWordToGuess || 'no yet'}} </pre> -->
        </section>

        <section class="border border-white min-h-8">
            <form @submit.prevent="handleSubmit">
                <div class="relative">
                    <input
                        type="text"
                        class="block w-full p-4 ps-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        :placeholder="placeholder"
                        v-model="word"
                        />
                    <button
                        type="submit"
                        class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Send
                    </button>
                </div>
            </form>
        </section>
    </div>
</template>

<script lang="ts" setup>
const word = ref('')
const words = ref([])
const gameMode = ref('input')
const placeholder = computed(() => gameMode.value === 'input' ? 'type the next word...' : 'guess the previous word...')
const wordLength = computed(() => words.value.length)
const guessedWords = computed(() => words.value.reduce((acc,w) => w.guess ? acc + 1  : acc, 0))
const nextWordToGuess = computed(() => words.value[words.value.length - words.value.filter((w) => w.guess).length -2 ])
//TODO: add cipher anymation https://vuejs.org/guide/extras/animation.html#animation-techniques


const temp = ref('')
const changeGameMode = () => {
    gameMode.value === 'input' ? gameMode.value = 'guess' : gameMode.value = 'input'
  
}
const {generateRandomString} = useUtilities()
const handleSubmit = () => {
    if( gameMode.value === 'input') {
        // words.value.push(word.value)
        words.value.push({word: word.value, guess: false, len: word.value.length, cipher: generateRandomString(word.value.length)})
        }else{
        if(word.value === nextWordToGuess.value.word) {
            // words.value.pop()
            nextWordToGuess.value.guess = true
            temp.value = 'correct'
            }else{
            temp.value = 'guess again'
        }
        }
    word.value = ''
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