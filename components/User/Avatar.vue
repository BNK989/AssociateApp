<template>
    <img class="w-10 h-10 rounded-full" :src="user?.user_metadata?.avatar_url" alt="Rounded avatar">
    <h6>Hi, {{ fName}}</h6>
</template>

<script lang="ts" setup>
const props = defineProps({
    user: Object
})

const fName = computed (() => props.user?.user_metadata.name.split(' ')[0])

</script>