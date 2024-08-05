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

const { $intro } = useNuxtApp()
const startTour = () => {
    console.log(18)
    $intro()
        .setOptions({
            exitOnEsc: true,
            autoPosition: true,

            steps: [
                {
                    element: document.querySelector(
                        'section.mx-2.flex.h-14.items-center.justify-between',
                    ),
                    intro: 'This is the first step.',
                    title: 'This is a title',
                },
                {
                    element: '#step2',
                    intro: 'This is the second step.',
                },
                // Add more steps as needed
            ],
        })
        .start()
}

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
    // nuxtApp.$introStart(appContext)
    // setTimeout(startTour, 2000)
})

onUnmounted(() => {
    if (process.client) {
        window.removeEventListener('resize', updateDynamicViewportHeight)
    }
})
</script>

<style>
.introjs-tooltip {
    box-sizing: content-box;
    position: absolute;
    visibility: visible;
    background-color: hsl(var(--color-bkg));
    color: hsl(var(--color-content));
    min-width: 250px;
    max-width: 300px;
    border: 1px solid hsl(var(--color-accent2));
    border-radius: 5px;
    box-shadow: 0 3px 30px rgba(33, 33, 33, 0.3);
    transition: opacity 0.1s ease-out;

    .introjs-arrow {
        border: 8px solid hsl(var(--color-accent2));
        rotate: 45deg;
        z-index: -1;
        .top {
            top: -20px;
            left: 10px;
        }
        /* border-top-color: hsl(var(--color-accent2)) !important;
        border-left-color: hsl(var(--color-accent2)) !important;
        border-right-color: hsl(var(--color-accent2)) !important; */
    }

    .introjs-skipbutton {
        color: hsl(var(--color-content));
    }

    .introjs-tooltipbuttons {
        border-top: 1px solid hsl(var(--color-accent2) / 25%);
        padding: 10px;
        text-align: right;
        white-space: nowrap;
    }

    .introjs-button {
        box-sizing: content-box;
        position: relative;
        overflow: visible;
        padding: 0.5rem 1rem;
        border: none;
        text-decoration: none;
        text-shadow: none;
        font-size: 14px;
        color: hsl(var(--color-content));
        white-space: nowrap;
        cursor: pointer;
        outline: 0;
        background-color: hsl(var(--color-accent3));
        border-radius: 0.2em;
        zoom: 1;
        display: inline;
    }
}
</style>
