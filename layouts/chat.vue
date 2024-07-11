<template>
    <main
        class="text-content flex flex-col min-h-dvh h-chat_dvh bg-bkg px-0 md:px-0"
        :dir="isRtl ? 'rtl' : 'ltr'">
        <Header v-show="!isMobile" />
        <div
            class="flex flex-col h-full overflow-y-hidden overflow-x-hidden mx-auto md:mt-4 md:space-y-4 md:px-4 xs:px-8 sm:px-10 lg:px-16 md:py-4 md:w-4/5 w-full">
            <pre class="fixed inset-0 z-50 h-min w-min">tempDvh: {{ tempDvh }}</pre>
            <slot />
        </div>
        <Footer class="hidden md:static" />
    </main>
</template>

<script setup lang="ts">
const { locale } = useI18n()
const isRtl = computed(() => ['ar', 'he'].includes(locale.value))
// useHead({
//     meta: [
//         {
//             name: 'viewport',
//             content:
//                 'width=device-width, initial-scale=1, interactive-widget=resizes-content',
//         },
//     ],
// })

const isMobile = computed(() => {
    if (!process.client) return false
    const width =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth
    return width < 768
})

const tempDvh = ref(0)
// only run on client and on mobile
function updateDynamicViewportHeight() {
    const dvh = window.visualViewport.height
    document.documentElement.style.setProperty('--chat-dvh', `${dvh}px`)
    tempDvh.value = document.documentElement.style.getPropertyValue('--chat-dvh')
    console.log('dvh:', document.documentElement.style.getPropertyValue('--chat-dvh'))
}

onMounted(() => {
    // const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    if (isMobile.value && process.client) {
        window.visualViewport.addEventListener('resize', () => {
            updateDynamicViewportHeight()
            console.log('visualViewport:', visualViewport.height)
        })
    }
})

onUnmounted(() => {
    if (process.client) {
        window.removeEventListener('resize', updateDynamicViewportHeight)
    }
})
</script>
