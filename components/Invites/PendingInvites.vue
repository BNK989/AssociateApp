<template>
    <section>
        <div
            class="relative overflow-x-auto border-b-2 border-accent-3/10 shadow-md sm:rounded-lg">
            <table class="my-4 w-full rounded-xl text-left text-sm rtl:text-right">
                <thead class="rounded-xl bg-bkg_dark/20 text-xs uppercase">
                    <tr>
                        <th scope="col" class="px-2 py-1" colspan="3">
                            <h2 class="my-2 text-xl">{{ $t('Pending_Invites') }}</h2>
                        </th>
                        <!-- <th scope="col" class="px-6 py-3">At</th>
                        <th scope="col" class="px-6 py-3">Action</th> -->
                    </tr>
                </thead>
                <tbody>
                    <tr
                        v-for="invite in pendingInvites"
                        :key="invite.id"
                        class="odd:bg-bkg_dark/40 even:bg-bkg_dark/60">
                        <th
                            scope="row"
                            class="flex flex-col items-center justify-start gap-2 whitespace-nowrap px-1 py-4 font-medium md:flex-row md:px-6">
                            <UserAvatar :user="invite.inviter" />
                            <span>
                                {{ invite.inviter.userName }}
                            </span>
                        </th>
                        <td class="px-1 py-4 md:px-6">
                            <small class="text-[.9em]">{{
                                relativeTime(invite.createdAt)
                            }}</small>
                        </td>
                        <td class="h-full">
                            <div
                                class="flex-center h-full rounded-md shadow-sm"
                                role="group">
                                <button
                                    type="button"
                                    @click="respondToInvite(invite.id, 'ACCEPTED')"
                                    class="rounded-s-lg bg-accent-3/80 px-4 py-2 text-sm font-medium duration-300 hover:bg-bkg_dark/70 hover:text-accent-3 focus:z-10 focus:text-accent-3 focus:ring-2 focus:ring-accent-3">
                                    Join
                                </button>
                                <button
                                    type="button"
                                    @click="respondToInvite(invite.id, 'DECLINED')"
                                    class="rounded-e-lg bg-red-600 px-4 py-2 text-sm font-medium duration-300 hover:bg-bkg_dark/70 hover:text-red-600 focus:z-10 focus:text-accent-3 focus:ring-2 focus:ring-accent-3">
                                    Reject
                                </button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { getInvites } from '@/services/loadInvites'
import { relativeTime } from '@/services/dateTime'
const store = useStore()
const { user } = storeToRefs(store)
const router = useRouter()

const allInvites = ref([])
const pendingInvites = computed(() => {
    if (allInvites?.value?.length < 1 || !allInvites?.value) return []
    return allInvites?.value.filter((invite) => invite.status === 'PENDING')
})
//@ts-ignore
allInvites.value = await getInvites(user.value?.id)

const respondToInvite = async (inviteId, status) => {
    const res = await $fetch('/api/invite/approve', {
        method: 'PUT',
        body: { inviteId, status },
    })
    if (res && res.success) {
        //@ts-ignore
        if (res.status === 'DECLINED') {
            return store.setToast({ msg: 'Invitation rejected', type: 'warn' })
        }
        store.setToast({ msg: 'Game joined', type: 'success' })
        //@ts-ignore
        await router.push(`/game/${res.gameId}`)
    } else {
        store.setToast({ msg: 'Something went wrong', type: 'error' })
    }
}

watch(
    () => user.value?.receivedInvites?.length,
    async () => {
        //@ts-ignore
        invites.value = await getInvites(user.value?.id)
    },
)
</script>
