<template>
    <NuxtImg v-if="user?.avatar" class="w-10 h-10 rounded-full" :src="user?.avatar" alt="Rounded avatar"/>
    <h6>Hi, {{ fName }}</h6>
    <!-- <pre>6{{ user }}</pre> -->
</template>

<script lang="ts" setup>
const props = defineProps({
    user: Object
})

const fName = computed (() => props.user?.userName.split(' ')[0] || props.user?.email?.split('@')[0])

</script>