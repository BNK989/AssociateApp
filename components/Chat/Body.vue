<template>
    <section
        class="relative border-y border-accent-3/40 h-full overflow-y-scroll overflow-x-hidden before:size-48 before:fixed before:inset-16 before:bg-accent-3 before:z-[-1] before:rounded-full before:blur-3xl before:animate-pulse-slow after:size-24 after:fixed after:bottom-16 after:right-8 md:after:right-48 after:bg-accent-1 after:z-[-1] after:rounded-full after:blur-3xl after:animate-pulse-slow-offset">
        <TransitionGroup name="list" tag="ul" class="flex flex-col gap-3 my-2">
            <li
                v-for="(w, i) in words as Word[]"
                :key="w.id"
                :ref="(el) => setWordRef(el, w.id)"
                class="flex items-center ms-2 gap-1">
                <SvgCheckMark v-if="w.isResolved" />
                <NuxtImg
                    :src="wordsWithUsers[i]?.avatar"
                    class="size-8 rounded-full me-1"
                    alt="Rounded avatar" />
                <div
                    class="px-3 pt-1 pb-2 bg-blue-300 bg-opacity-10 w-min whitespace-nowrap">
                    <p
                        v-if="i < words!.length - 1"
                        class="whitespace-nowrap"
                        :class="i === nextWordIdx ? 'font-bold' : ''">
                        {{ w.isResolved ? w.content : w.cipher }}
                    </p>
                    <p v-else>
                        <!-- TODO : only next in line sees the word -->
                        {{
                            nextPlayerId === storeUser.id ? w.content : w.cipher
                        }}
                    </p>
                    <small>{{
                        wordsWithUsers[i]?.id === storeUser.id
                            ? $t('You')
                            : wordsWithUsers[i]?.userName
                    }}</small>
                </div>
                <div
                    v-if="i === nextWordIdx && gameMode === 'SOLVE'"
                    id="lastGuess">
                    <SvgArrowRight class="rotate-180 animate-pulse" />
                </div>
            </li>
            <li ref="last" key="last"></li>
        </TransitionGroup>
    </section>
</template>

<script lang="ts" setup>
// import type { WordAndUser } from '@/types/user'
import type { Word } from '@/types/word'

const props = defineProps({
    words: { type: Array as PropType<Word[]>, required: false },
    users: { type: Array, required: false },
    guessedCount: Number,
    gameMode: String,
    scrollTo: Number,
    nextPlayerId: String,
})

const store = useStore()
const { user: storeUser } = storeToRefs(store)
const last = ref(null)
const nextWordIdx = computed(
    () => props.words!.length - props.guessedCount! - 2,
)
//@ts-ignore
const wordsWithUsers: WordAndUser[] = computed(mapWords)

function mapWords() {
    // @ts-ignore
    return props.words?.map((w) =>
        props.users?.find((u) => u?.id === w.senderId),
    )
}
// ******* SCROLL TO GUESS *******
const wordRefs = ref({})
const setWordRef = (el, id) => {
    if (el) {
        wordRefs.value[id] = el
    }
}

const scrollToId = async (wordId) => {
    await nextTick()
    const element = wordRefs.value[wordId]
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'end' })
    }
}
// ******* SCROLL TO GUESS END *******

const transFocus = async () => {
    await nextTick()
    last.value?.scrollIntoView({ behavior: 'smooth' })
}
watch(() => storeUser.value, mapWords)
watch(
    () => props.scrollTo,
    () => scrollToId(props.scrollTo),
)
watch(
    () => props.words.length,
    async () => await transFocus(),
)
</script>
