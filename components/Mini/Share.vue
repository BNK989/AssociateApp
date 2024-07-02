<template>
    <button
        class="py-3 px-6 bg-accent-3 border border-content shadow-xl shadow-accent-3/15"
        @click="share">
        Share Game
    </button>
</template>

<script setup>
const store = useStore()
const share = () => {
    if (navigator.share) {
        navigator.share({
            title: 'Associate',
            text: 'Come play Associate with me',
            url: 'https://associate-app-5sli.vercel.app/',
        })
    } else {
        navigator.clipboard.writeText('https://associate-app-5sli.vercel.app/')
        store.setToast({ msg: 'Link copied to clipboard', type: 'success' })
    }
}
</script>
