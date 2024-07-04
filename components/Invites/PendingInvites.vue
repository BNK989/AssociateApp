<template>
    <section>
        <h2 class="text-2xl my-2">{{ $t('Pending_Invites') }}</h2>

        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="my-4 w-full text-sm text-left rtl:text-right">
                <thead class="text-xs uppercase bg-bkg_dark/20">
                    <tr>
                        <th scope="col" class="px-6 py-3">From</th>
                        <th scope="col" class="px-6 py-3">At</th>
                        <th scope="col" class="px-6 py-3">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                        v-for="invite in pendingInvites"
                        :key="invite.id"
                        class="odd:bg-bkg_dark/40 even:bg-bkg_dark/60">
                        <th
                            scope="row"
                            class="px-6 py-4 font-medium whitespace-nowrap flex justify-start items-center gap-2">
                            <UserAvatar :user="invite.inviter" />
                            <span>
                                {{ invite.inviter.userName }}
                            </span>
                        </th>
                        <td class="px-6 py-4">{{ invite.createdAt }}</td>
                        <td class="px-6 py-4">
                            <div
                                class="inline-flex rounded-md shadow-sm"
                                role="group">
                                <button
                                    type="button"
                                    @click="
                                        respondToInvite(invite.id, 'ACCEPTED')
                                    "
                                    class="px-4 py-2 text-sm font-medium rounded-s-lg bg-accent-3/80 hover:bg-bkg_dark/70 hover:text-accent-3 focus:z-10 focus:ring-2 focus:ring-accent-3 focus:text-accent-3 duration-300">
                                    Join
                                </button>
                                <button
                                    type="button"
                                    @click="
                                        respondToInvite(invite.id, 'DECLINED')
                                    "
                                    class="px-4 py-2 text-sm font-medium rounded-e-lg bg-red-600 hover:bg-bkg_dark/70 hover:text-red-600 focus:z-10 focus:ring-2 focus:ring-accent-3 focus:text-accent-3 duration-300">
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
const store = useStore()
const { user } = storeToRefs(store)
const router = useRouter()

const allInvites = ref([])
const pendingInvites = computed(() => {
    return allInvites.value.filter((invite) => invite.status === 'PENDING')
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
