<template>
    <Main v-if="user" />
    <div v-else class="flex-center h-full flex-col gap-6">
        <h2 class="text-3xl">Please log in first</h2>
        <NuxtLink :to="localPath('/profile/login')"
            ><button
                class="rounded bg-accent-3/40 px-16 py-2 duration-300 hover:bg-accent-3/70">
                Login
            </button></NuxtLink
        >
    </div>
</template>

<script setup lang="ts">
// import { loadUserByEmail } from '@/services/loadUser'

definePageMeta({
    layout: 'chat',
})
const store = useStore()
const { user } = storeToRefs(store)
const route = useRoute()
const router = useRouter()
const localPath = useLocalePath()

onMounted(async () => {
    if (route.query?.temp && route.query?.email) {
        // import works once the store has been loaded
        const { loadUserByEmail } = await import('@/services/loadUser')
        await loadUserByEmail(route.query.email as string)

        // clear the query from the route
        router.replace({ query: {} })
    }
})
</script>
