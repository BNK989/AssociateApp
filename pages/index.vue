<template>
    <div>
        <h1 class="text-3xl font-bold">Welcome to the home page</h1>
        <pre>{{ email }}</pre>
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

            <li v-for="game in activeGames.data.value">
                <div>
                    <h2>{{ game.title }}</h2>
                    <p>{{ game.status }}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup>

const user = useSupabaseUser()
const email = user?.value?.email 

const dbUserId = await useFetch(`/api/user/id?email=${email}`)
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
