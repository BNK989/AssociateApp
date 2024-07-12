<template>
    <section
        class="body-section relative flex-grow border-y border-accent-3/40 overflow-y-scroll overflow-x-hidden before:size-48 before:fixed before:inset-16 before:bg-accent-3 before:z-[-1] before:rounded-full before:blur-3xl after:size-24 after:fixed after:bottom-16 after:right-8 md:after:right-48 after:bg-accent-1 after:z-[-1] after:rounded-full after:blur-3xl">
        <TransitionGroup name="list" tag="ul" class="flex flex-col gap-3 my-2">
            <ChatMsg
                v-for="(w, i) in wordsWithUsers"
                :key="w.id"
                :w="w"
                :i="i"
                :isMe="w.user?.id === storeUser?.id"
                :isLast="i === wordsWithUsers.length - 1"
                :isMyTurn="nextPlayerId === storeUser.id"
                :isSolve="gameMode === 'SOLVE'"
                :isArrow="i === nextWordIdx && gameMode === 'SOLVE'" />
            <li ref="last" key="last"></li>
        </TransitionGroup>
    </section>
</template>

<script lang="ts" setup>
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
const nextWordIdx = computed(() => props.words!.length - props.guessedCount! - 2)
//@ts-ignore
const wordsWithUsers: Word[] = computed(() => {
    return props.words?.map((w, i) => {
        const user = props.users?.find((u) => u?.id === w.senderId)
        w.user = user
        if (i < props.words.length - 1 && !w.isResolved) {
            delete w.content
        }
        return w
    })
})

// ******* SCROLL*******
const scrollToId = async (wordId) => {
    await nextTick()
    const element = document.getElementById('w-' + wordId)
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'end' })
    }
}

const transFocus = async () => {
    await nextTick()
    last.value?.scrollIntoView({ behavior: 'smooth' })
}

// **** watchers ****** //
watch(
    () => props.scrollTo,
    () => scrollToId(props.scrollTo),
)
watch(
    () => props.words.length,
    async () => await transFocus(),
)
</script>

<style scoped>
.body-section::before {
    animation: dance 45s infinite ease-in-out;
}
.body-section::after {
    animation: dance 18s infinite reverse ease-in-out;
}

@keyframes dance {
    20% {
        transform: translateY(150%) translateX(180%);
        opacity: 0.75;
    }
    40% {
        transform: scale(2) translateY(150%) translateX(180%);
        opacity: 0.5;
    }
    60% {
        transform: translateY(140%) translateX(180%);
        opacity: 0.75;
    }
    80% {
        transform: scale(2.5) translateY(150%) translateX(-180%);
    }
}
</style>
