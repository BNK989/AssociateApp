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
                    class="px-3 pt-1 pb-2 bg-blue-300 bg-opacity-10 w-min whitespace-nowrap select-none">
                    <div class="flex items-center gap-2">
                        <p
                            v-if="i < words!.length - 1"
                            class="whitespace-nowrap"
                            :class="i === nextWordIdx ? 'font-bold' : ''">
                            {{ w.isResolved ? w.content : w.cipher }}
                        </p>
                        <p v-else>
                            {{
                                nextPlayerId === storeUser.id
                                    ? w.content
                                    : w.cipher
                            }}
                        </p>
                        <span
                            v-if="!w.isResolved && i < words!.length - 1"
                            @click="getHint(w.id)"
                            class="cursor-help"
                            title="get hint">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="size-5 opacity-75">
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M16.712 4.33a9.027 9.027 0 0 1 1.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 0 0-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.014 9.014 0 0 1 0 9.424m-4.138-5.976a3.736 3.736 0 0 0-.88-1.388 3.737 3.737 0 0 0-1.388-.88m2.268 2.268a3.765 3.765 0 0 1 0 2.528m-2.268-4.796a3.765 3.765 0 0 0-2.528 0m4.796 4.796c-.181.506-.475.982-.88 1.388a3.736 3.736 0 0 1-1.388.88m2.268-2.268 4.138 3.448m0 0a9.027 9.027 0 0 1-1.306 1.652c-.51.51-1.064.944-1.652 1.306m0 0-3.448-4.138m3.448 4.138a9.014 9.014 0 0 1-9.424 0m5.976-4.138a3.765 3.765 0 0 1-2.528 0m0 0a3.736 3.736 0 0 1-1.388-.88 3.737 3.737 0 0 1-.88-1.388m2.268 2.268L7.288 19.67m0 0a9.024 9.024 0 0 1-1.652-1.306 9.027 9.027 0 0 1-1.306-1.652m0 0 4.138-3.448M4.33 16.712a9.014 9.014 0 0 1 0-9.424m4.138 5.976a3.765 3.765 0 0 1 0-2.528m0 0c.181-.506.475-.982.88-1.388a3.736 3.736 0 0 1 1.388-.88m-2.268 2.268L4.33 7.288m6.406 1.18L7.288 4.33m0 0a9.024 9.024 0 0 0-1.652 1.306A9.025 9.025 0 0 0 4.33 7.288" />
                            </svg>
                        </span>
                    </div>
                    <small>{{
                        wordsWithUsers[i]?.id === storeUser?.id
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
import type { User } from '~/types/user'

const props = defineProps({
    words: { type: Array as PropType<Word[]>, required: false },
    users: { type: Array as PropType<User[]>, required: false },
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

const getHint = async (wordId) => {
    const hint = await $fetch(`/api/ai/hint?msg_id=${wordId}`)
    store.setToast({ msg: hint, type: 'info', duration: 10000 })
}

// **** watchers ****** //
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
