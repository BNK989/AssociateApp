<template>
    <div>
        <h1 class="text-3xl font-bold">Welcome to the home page</h1>
        <pre>{{ email }} {{ userId }}</pre>
        <ul class="my-4 flex gap-4">
            <li>
                <button @click="createNewGame" class="py-2 px-3 rounded-full bg-blue-700">Start a new Game</button>
            </li>
            <li>
                <button class="py-2 px-3 rounded-full bg-blue-700">Join an existing Game</button>
            </li>
        </ul>
        <!-- <pre>{{ activeGames.data }}</pre> -->
        <ul>

            <li v-for="game in activeGames.data.value" class="my-4">
                <nuxt-link :to="`/game/${game.id}`">
                    <div class="flex flex-col gap-4 rounded bg-blue-900 max-w-56 p-2 cursor-pointer hover:bg-opacity-85">
                        <h2>{{ game.title }}</h2>
                        <p>{{ game.status }}</p>
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

const dbUserId: any = await useFetch(`/api/user/id?email=${email}`)
storeUser.value = dbUserId.data.value
const activeGames = await useFetch(`/api/all-games?user_id=${dbUserId.data.value?.id}`)

const createNewGame = async () => {
    if (!dbUserId.data.value) return
    const title = prompt('Enter game title')
    if (!title) return

    await $fetch('/api/create-game', {
        method: 'POST',
        body: {
            title,
            user_id: dbUserId.data.value.id
         }
      })

}

</script>
