<template>
    <div class="z-50 justify-center items-center w-full h-modal md:h-full">
        <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
            <!-- Modal content -->
            <div
                class="relative p-4 rounded-lg shadow sm:p-5">
                <!-- Modal header -->
                <div
                    class="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5">
                    <h3
                        class="text-lg font-semibold">
                        Add Player
                    </h3>
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
                        <label
                            for="name"
                            class="block mb-2 text-sm font-medium"
                            >Name</label
                        >
                        <input
                            @input="getPlayers()"
                            v-model="q"
                            type="text"
                            name="name"
                            id="name"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                            placeholder="Type player name" />
                </div>
                <form action="#">
                    <div
                        class="grid gap-4 mb-4 bg-blue-950 p-4 rounded min-h-96">
                        <ul
                            class="flex flex-col divide-y-2 gap-2 divide-y-blue-900 ">
                            <li v-for="p in players" class="flex justify-between items-center">
                                <span>{{p.userName}}</span
                                ><span><button @click="addPlayerToGame(p.id)" class="px-3 py-2 bg-blue-800 rounded-full">Add</button></span>
                            </li>
                        </ul>

                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
// const { debounce } = useUtilities()
defineEmits(['closeModal'])

const players = ref([])
const q = ref('')

onMounted(() => {
    getPlayers()
})

// const debounceGetPlayers = (q = '') => {
//     console.log('debouncing...')
//     // @ts-ignore
//     debounce(() => getPlayers(q), 3)
// }

const getPlayers = async () => {    
    const qPlayers = await $fetch(`/api/user/all-users${q.value ? `?userName=${q.value}` : ''}`, {method: 'GET'})
    players.value = qPlayers
}

const addPlayerToGame = async (id) => {
    await $fetch(`/api/${1}/add-user`, {
        method: 'PUT',
        body: {
            user_id: id
        }
    })
}
</script>
