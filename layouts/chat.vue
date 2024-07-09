<template>
    <main
        class="text-content flex flex-col h-dvh bg-bkg px-0 md:px-0"
        :dir="isRtl ? 'rtl' : 'ltr'">
        <Header v-show="false" />
        <div
            class="flex flex-col h-full overflow-y-hidden overflow-x-hidden mx-auto md:mt-4 md:space-y-4 md:px-4 xs:px-8 sm:px-10 lg:px-16 md:py-4 md:w-4/5 w-full">
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
