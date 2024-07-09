<template>
    <div class="mx-2 mt-2">
        <!-- <h2 class="text-3xl font-bold mb-2">Invites</h2> -->
        <InvitesPendingInvites v-if="totalInvites > 0" />
        <div v-else class="flex-center flex-col gap-6">
            <h2 class="text-3xl">No pending invites</h2>
            <NuxtLink :to="localPath('/profile/login')">
                <button class="py-4 px-10 bg-accent-2/40">Back</button>
            </NuxtLink>
        </div>
    </div>
</template>

<script lang="ts" setup>
definePageMeta({
    layout: 'scrollable',
})

const store = useStore()
const { totalInvites } = storeToRefs(store)

const localPath = useLocalePath()
</script>
