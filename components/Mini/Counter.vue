<template>
    <span>{{ tweened.number.toFixed(0) }}</span>
</template>

<script setup>
import gsap from 'gsap'
const props = defineProps({
    n: { type: Number, default: 0 },
})

const number = ref(props.n)
const tweened = reactive({
    number: number.value,
})

watch(
    () => props.n,
    (n) => {
        gsap.to(tweened, { duration: 0.65, number: Number(n) || 0 })
    },
)
</script>
