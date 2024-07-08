<template>
    <p>
        <span ref="pRef"></span>
        <span ref="endSpanRef"></span>
    </p>
</template>

<script setup lang="ts">
const props = defineProps<{ t: string }>()
const pRef = ref<HTMLSpanElement | null>(null)
const endSpanRef = ref<HTMLSpanElement | null>(null)
const { generateRandomString } = useUtilities()
onMounted(() => {
    pRef.value.innerText = props.t
})

watch(
    () => props.t,
    () => scramble(),
)

function scramble(duration: number = 1) {
    pRef.value.innerText = ''
    endSpanRef.value.innerText = ''
    const len = props.t.length
    const ms = (duration * 1000) / len
    for (let i = 0; i < len; i++) {
        setTimeout(() => {
            endSpanRef.value.innerText = ''
            pRef.value.innerText += props.t[i]
            endSpanRef.value.innerText += generateRandomString(len - i - 1, '', '')
        }, i * ms)
    }
}
</script>
