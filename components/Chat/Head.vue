<template>
    
    <section class="border border-white min-h-8 flex items-center justify-around">
            <p>Game Mode : {{ gameMode }}</p>
            <p>Word Length : {{ wordLength }}</p>
            <p>{{ feedback }}</p>
            <button class="px-3 py-2 bg-blue-600 my-2 rounded-full" @click="$emit('changeGameMode')">change game mode</button>
        </section>
</template>

<script lang="ts" setup>
const props = defineProps({
    gameMode: String,
    wordLength: Number,
    feedback: String
})
const emit = defineEmits(['changeGameMode'])
</script>

