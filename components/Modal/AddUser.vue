<template>
    <div
        class="min-w-80 z-50 justify-center items-center rounded w-full h-modal md:h-full md:w-[40dvw]">
        <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
            <!-- Modal content -->
            <div class="relative p-4 rounded-lg shadow sm:p-5">
                <!-- Modal header -->
                <div
                    class="flex justify-between items-center pb-4 mb-4 rounded-t sm:mb-5">
                    <h3 class="text-lg font-semibold">Add Player</h3>
                    <button
                        @click="$emit('closeModal')"
                        type="button"
                        class="bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                        data-modal-toggle="defaultModal">
                        <svg
                            class="w-5 h-5"
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
                    <label for="name" class="block mb-2 text-sm font-medium"
                        >Name</label
                    >
                    <input
                        @input="getPlayers()"
                        v-model="q"
                        type="text"
                        name="name"
                        id="name"
                        class="bg-bkg border border-accent-2/40 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 placeholder:text-content/65"
                        placeholder="Type player name" />
                </div>
                <form action="#">
                    <div
                        class="grid gap-4 mb-4 md:border border-accent-2/40 py-4 rounded min-h-96">
                        <ul
                            class="flex flex-col gap-4 md:divide-y divide-accent-2/40">
                            <!-- <pre>{{ players }}</pre> -->
                            <li
                                v-for="p in players"
                                class="flex justify-between items-center p-2 box-border odd:bg-accent-2/10 odd:md:bg-accent-2/0 even:bg-accent-2/5 even:md:bg-accent-2/0 md:mx-3 rounded">
                                <span>{{ p.userName }}</span>
                                <!-- <pre>{{ storeGame.Users }}</pre> -->
                                
                                    <button v-if="!store?.playersEmails" >Add</button>
                                    <button v-else
                                        @click="addPlayerToGame(p.id)"
                                        class="px-3 py-1 text-sm bg-accent-2/40 rounded-full"
                                        :class="{
                                            'bg-accent-2/15':
                                            store?.playersEmails.includes(
                                                p.email,
                                            ),
                                        }"
                                        :disabled="
                                            store?.playersEmails.includes(
                                                p.email,
                                            )"
                                            >                        
                                            
                                            {{ store?.playersEmails?.includes(
                                                p?.email,
                                            )
                                                ? 'Added'
                                                : 'Add'
                                        }}
                                    </button>
                                
                                
                            </li>
                        </ul>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
const store = useStore()
const { user: storeUser, game: storeGame } = storeToRefs(store)
// const { debounce } = useUtilities()
defineEmits(['closeModal'])

const players = ref([])
const q = ref('')

onMounted(() => {
    getPlayers()    
})

// TODO: ADD DEBOUNCE TO GET PLAYERS

const getPlayers = async () => {
    const qPlayers = await $fetch(
        `/api/user/all-users${q.value ? `?userName=${q.value}` : ''}`,
        { method: 'GET' },
    )
    if (storeUser.value){
        //@ts-ignore
        qPlayers.filter(p => p.email !== storeUser.value?.email)
        //@ts-ignore
        players.value = qPlayers.filter((p) => p.email !== storeUser.value?.email)
    } else {
        console.error('storeUser not loaded')
        players.value = qPlayers
    }
}

const addPlayerToGame = async (id: number) => {

    try{
        //@ts-ignore
        const { error, success } = await $fetch(`/api/${storeGame.value.id}/add-user`, {
            method: 'PUT',
            body: {
                user_id: id,
            },
        })
        
        if (error) console.error('133there was an error', error)
        if (success) store.setToast({msg: 'User added', type: 'success', duration: 2500})
        else store.setToast({msg: 'Issue adding user', type: 'error', duration: 2500})
    
    }
    catch(err){
    console.error("137there was an error", err)
    }
}
</script>
