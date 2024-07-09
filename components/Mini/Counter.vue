<template>
    <span class="ttt">{{ tweened.number.toFixed(0) }}</span>
</template>

<script setup lang="ts">
import gsap from 'gsap'
const props = defineProps<{ n: number }>()
const number = ref(props.n)
const tweened = reactive({
    number: number.value || 0,
})
const prevN = ref(0)
const isBigger = computed(() => props.n > prevN.value)

watch(
    () => props.n,
    (n) => {
        gsap.to(tweened, {
            duration: 1,
            number: Number(n) || 0,
        })
        if (n === 0) return
        gsap.fromTo(
            '.ttt',
            {
                color: 'white',
                scale: 1,
            },
            {
                color: isBigger.value ? 'green' : 'red',
                scale: 1.3,
                yoyo: true,
                repeat: 1,
                duration: 0.6,
            },
        )
        prevN.value = n
    },
)
</script>
