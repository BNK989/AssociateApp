<!-- ********* UNUSED ******** -->
<template>
    <li
        :key="w.id"
        :ref="(el) => setWordRef(el, w.id)"
        class="flex items-center ms-2 gap-1">
        <SvgCheckMark v-if="w.isResolved" />
        <NuxtImg
            :src="wordsWithUsers[i]?.avatar"
            class="size-8 rounded-full me-1"
            alt="Rounded avatar" />
        <div
            class="px-3 pt-1 pb-2 bg-blue-300 bg-opacity-10 w-min whitespace-nowrap">
            <p
                v-if="i < words!.length - 1"
                class="whitespace-nowrap"
                :class="i === nextWordIdx ? 'font-bold' : ''">
                {{ w.isResolved ? w.content : w.cipher }}
            </p>
            <p v-else>
                {{ w.content }}
            </p>
            <small>{{
                wordsWithUsers[i]?.id === storeUser.id
                    ? $t('You')
                    : wordsWithUsers[i]?.userName
            }}</small>
        </div>
        <div v-if="i === nextWordIdx && gameMode === 'SOLVE'" id="lastGuess">
            <SvgArrowRight class="rotate-180 animate-pulse" />
        </div>
    </li>
</template>

<script lang="ts" setup>
defineProps({
    w: Object,
})
</script>
