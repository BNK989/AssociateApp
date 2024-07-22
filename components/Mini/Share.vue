<template>
    <button
        class="rounded-md border px-6 py-3 shadow-xl shadow-accent-3/15"
        :class="
            title === 'Share Game'
                ? 'border-accent-3 bg-accent-3/80'
                : 'border-accent-2 bg-accent-2/40'
        "
        @click="share">
        {{ title || 'Share Game' }}
    </button>
</template>

<script setup>
const props = defineProps({
    title: {
        type: String,
        default: 'Share Game',
    },
    gameId: {
        type: Number,
        default: null,
    },
})

const store = useStore()

const link = computed(() => {
    const origin = window.location.origin || 'https://associate-app-5sli.vercel.app'
    if (props.gameId) {
        return `${origin}/game/join-${props.gameId}`
    } else {
        return origin
    }
})

const share = () => {
    if (navigator.share) {
        navigator.share({
            title: 'Associate',
            text: 'Come play Associate with me',
            url: link.value,
        })
    } else {
        navigator.clipboard.writeText(link.value)
        store.setToast({ msg: 'Link copied to clipboard', type: 'success' })
    }
}
</script>
