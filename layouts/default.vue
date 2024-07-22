<template>
    <main
        class="flex h-dvh flex-col bg-bkg px-0 text-content md:px-0"
        :dir="isRtl ? 'rtl' : 'ltr'">
        <Header />
        <div
            class="xs:px-8 mx-auto flex h-full w-full flex-col overflow-x-hidden overflow-y-hidden sm:px-10 md:mt-4 md:w-4/5 md:space-y-4 md:px-4 md:py-4 lg:px-16">
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
</script>
