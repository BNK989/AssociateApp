<template>
    <main
        class="flex h-chat_dvh flex-col overflow-hidden bg-bkg px-0 text-content md:px-0"
        :dir="isRtl ? 'rtl' : 'ltr'">
        <Header v-show="!isMobile" />
        <!-- <pre class="fixed inset-0 z-50 h-min w-min">tempDvh: {{ tempDvh }}</pre> -->
        <slot />
        <Footer class="hidden md:static" />
    </main>
</template>

<script setup lang="ts">
const { locale } = useI18n()
const isRtl = computed(() => ['ar', 'he'].includes(locale.value))

const isMobile = computed(() => {
    if (!process.client) return false
    const width =
        window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
    return width < 768
})

// const tempDvh = ref(0)
// only run on client and on mobile
function updateDynamicViewportHeight() {
    const dvh = window.visualViewport.height
    document.documentElement.style.setProperty('--chat-dvh', `${dvh}px`)
    //@ts-ignore
    // tempDvh.value = document.documentElement.style.getPropertyValue('--chat-dvh')
    // console.log('dvh:', document.documentElement.style.getPropertyValue('--chat-dvh'))
}

onMounted(() => {
    // const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    if (isMobile.value && process.client) {
        window.visualViewport.addEventListener('resize', () => {
            updateDynamicViewportHeight()
        })
    }
})

onUnmounted(() => {
    if (process.client) {
        window.removeEventListener('resize', updateDynamicViewportHeight)
    }
})
</script>
