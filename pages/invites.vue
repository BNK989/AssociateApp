<template>
    <div class="mx-2 mt-2">
        <div v-if="pending" class="flex-center h-[50vh]">
            <span class="loading loading-dots"></span>
        </div>
        <template v-else>
            <InvitesPendingInvites v-if="invites?.length > 0" :invites="invites" />
            <div v-else class="flex-center flex-col gap-6">
                <h2 class="text-3xl">No pending invites</h2>
                <NuxtLink :to="localPath('/profile/login')">
                    <button class="bg-accent-2/40 px-10 py-4">Back</button>
                </NuxtLink>
            </div>
        </template>
    </div>
</template>

<script lang="ts" setup>
import { useStore } from '@/stores/store'

definePageMeta({
    layout: 'scrollable',
})

const store = useStore()
const { user } = storeToRefs(store)
const localPath = useLocalePath()

// Fetch invites data
const { data: invites, pending } = await useAsyncData(
    'user-invites',
    async () => {
        try {
            if (!user.value?.id) return []
            
            const response = await $fetch<any[]>(`/api/invite/${user.value.id}`)
            store.$state.totalInvites = Array.isArray(response) ? response.length : 0
            return Array.isArray(response) ? response : []
        } catch (error) {
            console.error('Error fetching invites:', error)
            store.$state.totalInvites = 0
            return []
        }
    },
    {
        watch: [() => user.value?.id],
        immediate: true
    }
)
</script>
