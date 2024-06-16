<template>
    <section
        class="relative border border-blue-600 h-full overflow-y-scroll overflow-x-hidden">
        <pre>pre{{ wordsWithUsers }}</pre>
        <TransitionGroup name="list" tag="ul" class="flex flex-col gap-3 my-2">
            <li
            v-for="(w, i) in words as Word[]"
            :key="w.cipher"
            class="flex items-center ms-2 gap-1">
                <SvgCheckMark v-if="w.isResolved" />
                <img :src="wordsWithUsers[i].avatar" class="size-8 rounded-full" alt="Rounded avatar">
                <div class="px-3 pt-1 pb-2 bg-blue-300 bg-opacity-10 w-min whitespace-nowrap">
                    
                    <p
                    v-if="i < words!.length - 1"
                        class=" whitespace-nowrap"
                        :class="i === nextWordIdx ? 'font-bold' : ''">
                        {{ w.isResolved ? w.content : w.cipher }}
                        </p>
                        <p v-else>
                            {{ w.content }}
                            </p>
                        <small>{{ wordsWithUsers[i].userName }}</small>
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


interface Word {
    id: number
    createdAt: Date
    content: string
    cipher: string
    isResolved: boolean
    senderId: string
}

// const user = useSupabaseUser()

const props = defineProps({
    words: {type: Array as PropType<Word[]>, required: false},
    users: {type: Array , required: false},
    guessedCount: Number,
    gameMode: String
})

const last = ref(null)
const nextWordIdx = computed(() => props.words!.length - props.guessedCount! -2 )
const wordsWithUsers = computed(() => {
    return props.words?.map(w => {
        // TODO fix if --> if the sender is you
        // if(w.senderId === '') return 'You'
        return props.users?.find(u => u?.id === w.senderId)
    })
})
console.log('wordsWithUsers:', wordsWithUsers.value)


// const transFocus = async() => {
//     await nextTick()
//     last.value?.scrollIntoView({ behavior: 'smooth'})
//     }
    
    // watch(props.words, transFocus)
    watch(()=>props.guessedCount, async () => {
        await nextTick()
        const lastGuessById = document.getElementById('lastGuess')
        lastGuessById?.scrollIntoView({ behavior: 'smooth'})
    })
</script>