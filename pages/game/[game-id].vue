<template>
    <Main v-if="user" />
    <div v-else>
        <h2>Please log in first</h2>
        <NuxtLink :to="localPath('/profile/login')">Login</NuxtLink>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'chat',
})
const store = useStore()
const { user } = storeToRefs(store)
const localPath = useLocalePath()
</script>
