<template>
    <main
        class="text-content flex flex-col min-h-dvh bg-bkg px-0 md:px-0"
        :dir="isRtl ? 'rtl' : 'ltr'">
        <Header />
        <div
            class="flex flex-col flex-1 h-full mx-auto md:mt-4 md:space-y-4 md:px-4 xs:px-8 sm:px-10 lg:px-16 md:py-4 md:w-4/5 w-full">
            <slot />
        </div>
        <Footer />
    </main>
</template>

<script setup lang="ts">
const { locale } = useI18n()
const isRtl = computed(() => ['ar', 'he'].includes(locale.value))
</script>
