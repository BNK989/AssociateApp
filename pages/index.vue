<template>
    <div>
        <h1 class="text-3xl font-bold">Welcome</h1>
        <ul class="my-4 flex gap-4">
            <li>
                <button @click="createNewGame" class="py-2 px-3 rounded-full bg-accent-3">Start a new Game</button>
            </li>
            <li>
                <button class="py-2 px-3 rounded-full bg-accent-3">Join an existing Game</button>
            </li>
        </ul>
        <ul>

            <li v-for="game in activeGames.value" class="my-4">
                <nuxt-link :to="`/game/${game.id}`">
                    <div class="flex flex-col gap-4 rounded bg-accent-3/80 max-w-56 p-3 cursor-pointer hover:bg-accent-3/50 duration-300">
                        <h2>{{ game.title }}</h2>
                        <p>{{ game.status }}</p>
                        <ul class="flex gap-2 flex-wrap">
                            <li v-for="p in game.Users" class="bg-accent-2/30 px-2 rounded-full ">{{ p.user.email === email ? 'You' : p.user.userName }}</li>
                        </ul>
                    </div>
                </nuxt-link>
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
const store = useStore()
const { user: storeUser } = storeToRefs(store)
const user = useSupabaseUser()
const email = user?.value?.email
const activeGames = ref([])

const dbUserId = storeUser.value?.id

onMounted(async () => {
    // console.log('supa-user:', user)
    if (!storeUser.value) return
    getActiveGames()
})
watch(() => storeUser.value?.id, getActiveGames)

async function getActiveGames() {
    console.log('storeUser.value?.id:', storeUser.value?.id)
    if(!storeUser.value?.id){
        console.log('no user')
        activeGames.value = []
        } else {
        console.log('user', storeUser.value)
        //@ts-ignore
        activeGames.value = await useFetch(`/api/all-games?user_id=${storeUser.value?.id}`).data
    }
}

const createNewGame = async () => {
    if (!dbUserId) return alert('Please login first')
    const title = prompt('Enter game title', 'Untitled Game')
    if (!title) return

    await $fetch('/api/create-game', {
        method: 'POST',
        body: {
            title,
            user_id: dbUserId
         }
      })
}

</script>
