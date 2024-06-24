<template>
    <div class="p-4">
        <h1 class="text-3xl font-bold text-right ltr:text-left">{{ $t('Welcome')}}</h1>
        <button @click="createNewGame" class="py-2 px-3 my-4 rounded-full w-full md:w-2/5 bg-accent-3">{{ $t('Start_New_Game_Btn') }}</button>
        <!-- <ul class="my-4 flex gap-4">
            <li>
            </li> -->
            <!-- <li>
                <button class="py-2 px-3 rounded-full bg-accent-3">Join an existing Game</button>
            </li> -->
        <!-- </ul> -->
        <ul class="grid gap-4 grid-cols-2 md:grid-cols-4">

            <li v-for="game in activeGames">
                <nuxt-link :to="localPath(`/game/${game.id}`)">
                    <div class="grid grid-cols-[minmax(min-content,1fr)_min-content] gap-3 rounded bg-accent-3/80 md:max-w-56 p-3 cursor-pointer hover:bg-accent-3/50 duration-300">
                        <h2 class="text-2xl" >{{ game.title }}</h2>
                        <h6 class="text-sm lowercase self-start">{{ game.GameMode }}</h6>
                        <ul class="col-span-full flex gap-2 flex-wrap">
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

const localPath = useLocalePath()

const user = useSupabaseUser()

const email = user?.value?.email
const activeGames = ref([])

onMounted(async () => {
    // console.log('supa-user:', user)
    if (!storeUser.value) return
    getActiveGames()
})
watch(() => storeUser.value?.id, getActiveGames)

async function getActiveGames() {
    // console.log('storeUser.value?.id:', storeUser.value?.id)
    if(!storeUser.value?.id) activeGames.value = [] 
    else activeGames.value = await $fetch(`/api/all-games?user_id=${storeUser.value?.id}`)
}

const createNewGame = async () => {
    
    if (!storeUser.value?.id) return store.setToast({ msg: 'Please login first', type: 'warn' })
    const title = prompt('Enter game title', 'Untitled Game')
    if (!title) return

    await $fetch('/api/create-game', {
        method: 'POST',
        body: {
            title,
            user_id: storeUser.value?.id
         }
      })
}

</script>
