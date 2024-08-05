<template>
    <div
        class="h-modal z-50 w-full min-w-80 items-center justify-center overflow-hidden rounded md:h-full md:w-[40dvw]">
        <div class="relative h-full w-full max-w-2xl overflow-hidden p-4 md:h-auto">
            <!-- Modal content -->
            <div class="relative overflow-hidden rounded-lg p-4 shadow sm:p-5">
                <!-- Modal header -->
                <div
                    class="mb-4 flex items-center justify-between overflow-hidden rounded-t pb-4 sm:mb-5">
                    <h3 class="text-lg font-semibold">Add Player</h3>
                    <button
                        @click="$emit('closeModal')"
                        type="button"
                        class="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm hover:bg-gray-200 hover:text-gray-900"
                        data-modal-toggle="defaultModal">
                        <svg
                            class="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                fill-rule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <span class="sr-only">Close modal</span>
                    </button>
                </div>
                <!-- Modal body -->
                <div class="my-2">
                    <label for="name" class="mb-2 block text-sm font-medium">Name</label>
                    <input
                        @input="debouncedFn()"
                        v-model="q"
                        type="text"
                        name="name"
                        id="name"
                        class="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-accent-2/40 bg-bkg p-2.5 text-sm placeholder:text-content/65"
                        placeholder="Type player name" />
                </div>
                <section>
                    <div
                        class="mb-4 grid h-[45dvh] gap-4 overflow-y-auto rounded border-accent-2/40 py-4 md:border">
                        <ul class="flex flex-col gap-4 divide-accent-2/40 md:divide-y">
                            <!-- <pre>{{ players }}</pre> -->
                            <li
                                v-for="p in players"
                                class="box-border flex items-center justify-between rounded p-2 odd:bg-accent-2/10 even:bg-accent-2/5 md:mx-3 odd:md:bg-accent-2/0 even:md:bg-accent-2/0">
                                <span>{{ p.userName }}</span>
                                <!-- <pre>{{ storeGame.Users }}</pre> -->

                                <button v-if="!store?.playersEmails">Add</button>
                                <button
                                    v-else
                                    @click="invitePlayerToGame($event, p.id)"
                                    class="rounded-full bg-accent-2/40 px-3 py-1 text-sm"
                                    :class="{
                                        'bg-accent-2/15': store?.playersEmails.includes(
                                            p.email,
                                        ),
                                    }"
                                    :disabled="store?.playersEmails.includes(p.email)">
                                    {{
                                        store?.playersEmails?.includes(p?.email)
                                            ? 'Added'
                                            : store?.inviteesEmails?.includes(p?.email)
                                              ? 'Invite Sent'
                                              : 'Add'
                                    }}
                                </button>
                            </li>
                        </ul>
                    </div>
                </section>
                <div class="flex w-full items-center justify-center">
                    <MiniShare title="Share an invite" :gameId="storeGame?.id" />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
const store = useStore()
const { user: storeUser, game: storeGame } = storeToRefs(store)
defineEmits(['closeModal'])

const players = ref([])
const q = ref('')

onMounted(() => {
    getPlayers()
})

const getPlayers = async () => {
    const qPlayers = await $fetch(
        `/api/user/all-users${q.value ? `?userName=${q.value}` : ''}`,
        { method: 'GET' },
    )
    if (storeUser.value) {
        //@ts-ignore
        qPlayers.filter((p) => p.email !== storeUser.value?.email)
        //@ts-ignore
        players.value = qPlayers.filter((p) => p.email !== storeUser.value?.email)
    } else {
        console.error('storeUser not loaded')
        players.value = qPlayers
    }
}

const debouncedFn = useDebounceFn(getPlayers, 500, { maxWait: 5000 })

const invitePlayerToGame = async (ev: MouseEvent, id: number) => {
    const target = ev.target as HTMLElement

    try {
        //@ts-ignore
        const data = await $fetch(`/api/invite/send`, {
            method: 'POST',
            body: {
                inviterId: storeUser.value?.id,
                inviteeId: id,
                gameId: storeGame.value.id,
            },
        })

        if (!data) {
            throw new Error('there was an error creating the invite')
        } else {
            console.log('data:', data)
            store.setToast({
                msg: 'User Invited',
                type: 'success',
                duration: 2500,
            })
            target.innerText = 'Invite Sent'
        }
    } catch (err) {
        console.error('137there was an error', err)
        store.setToast({
            msg: 'Issue Inviting user',
            type: 'error',
            duration: 2500,
        })
    }
}
</script>
