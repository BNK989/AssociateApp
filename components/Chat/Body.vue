<template>
    <section
        class="relative border border-blue-600 h-full overflow-y-scroll overflow-x-hidden">
        <TransitionGroup name="list" tag="ul" class="flex flex-col gap-3 my-2">
            <li
            v-for="(w, i) in words as Word[]"
            :key="w.cipher"
            class="flex items-center ms-2 gap-1">
                <SvgCheckMark v-if="w.guess" />
                <img :src="w.sender!.img" class="size-8 rounded-full" alt="Rounded avatar">
                <div class="px-3 pt-1 pb-2 bg-blue-300 bg-opacity-10 w-min whitespace-nowrap">
                    <small>{{ w.sender!.name }}</small>
                    
                    <p
                        v-if="i < words!.length - 1"
                        class=" whitespace-nowrap"
                        :class="i === nextWordIdx ? 'font-bold' : ''">
                        {{ w.guess ? w.word : w.cipher }}
                    </p>
                    <p v-else>
                        {{ w.word }}
                        </p>
                        </div>
                            <div v-if="i === nextWordIdx && gameMode === 'guess'" id="lastGuess">
                                <SvgArrowRight class="rotate-180"/>
                            </div>
            </li>
            <li ref="last" key="last"></li>
        </TransitionGroup>
    </section>
</template>

<script lang="ts" setup>

type Sender = {
    id: string
    name: string
    img: string
}
interface Word {
    word: string
    sender?: Sender
    guess: boolean
    len: number
    cipher: string
}
const props = defineProps({
    words: Array,
    guessedCount: Number,
    gameMode: String
})

const last = ref(null)
const nextWordIdx = computed(() => props.words!.length - props.guessedCount! -2 )

const transFocus = async() => {
    await nextTick()
    last.value?.scrollIntoView({ behavior: 'smooth'})
    }
    
    watch(props.words, transFocus)
    watch(()=>props.guessedCount, async () => {
        await nextTick()
        const lastGuessById = document.getElementById('lastGuess')
        lastGuessById?.scrollIntoView({ behavior: 'smooth'})
    })
</script>