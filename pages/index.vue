<template>
    <div class="p-4">
        <h1 class="text-3xl font-bold text-right ltr:text-left">
            {{ $t('Welcome') }}
        </h1>
        <button
            v-if="storeUser"
            @click="createNewGame"
            class="py-2 px-3 my-4 rounded-full w-full md:w-2/5 bg-accent-3">
            {{ $t('Start_New_Game_Btn') }}
        </button>
        <nuxt-link v-else :to="localPath('/profile/login?signup=true')">
            <button
                class="py-2 px-3 my-4 rounded-full w-full md:w-2/5 bg-accent-3">
                {{ $t('Signup_to_play') }}
            </button>
        </nuxt-link>
        <!-- <pre>{{ activeGames }}</pre> -->
        <h2 class="text-2xl my-2">{{ $t('Active_Games') }}</h2>

        <ul class="flex gap-4 flex-wrap w-full">
            <li v-for="game in activeGames">
                <nuxt-link :to="localPath(`/game/${game.id}`)">
                    <div
                        class="grid grid-cols-[minmax(min-content,1fr)_min-content] gap-1 min-h-32 rounded bg-accent-3/80 max-w-40 h-36 md:max-w-56 p-2 cursor-pointer hover:bg-accent-3/50 duration-300">
                        <h2 class="text-2xl">{{ game.title }}</h2>
                        <h6 class="text-sm lowercase self-start">
                            {{ game.GameMode }}
                        </h6>
                        <ul class="col-span-full flex gap-2 flex-wrap self-end">
                            <li
                                v-for="p in game.Users"
                                class="bg-accent-2/30 px-2 rounded-full flex-center max-h-6">
                                {{
                                    p.user.email === email
                                        ? 'You'
                                        : p.user.userName
                                }}
                            </li>
                        </ul>
                    </div>
                </nuxt-link>
            </li>
        </ul>
        <!-- END OF ACTIVE GAME -->
        <div v-if="otherGames.length > 0">
            <h2 class="text-2xl my-2">
                {{ $t('Non_Active_Games') }}
            </h2>

            <ul class="grid gap-4 grid-cols-2 md:grid-cols-4">
                <li v-for="game in otherGames">
                    <nuxt-link :to="localPath(`/game/${game.id}`)">
                        <div
                            class="grid grid-cols-[minmax(min-content,1fr)_min-content] gap-3 rounded bg-accent-3/80 md:max-w-56 p-3 cursor-pointer hover:bg-accent-3/50 duration-300">
                            <h2 class="text-2xl">{{ game.title }}</h2>
                            <h6 class="text-sm lowercase self-start">
                                {{ game.GameMode }}
                            </h6>
                            <small>{{ game.status }}</small>
                            <ul class="col-span-full flex gap-2 flex-wrap">
                                <li
                                    v-for="p in game.Users"
                                    class="bg-accent-2/30 px-2 rounded-full">
                                    {{
                                        p.user.email === email
                                            ? 'You'
                                            : p.user.userName
                                    }}
                                </li>
                            </ul>
                        </div>
                    </nuxt-link>
                </li>
            </ul>
        </div>
        <!-- END OF NON ACTIVE GAMES -->
    </div>
</template>

<script lang="ts" setup>
definePageMeta({
    layout: 'scrollable',
})
const store = useStore()
const { user: storeUser } = storeToRefs(store)

const supabase = useSupabaseClient()
let realtimeChannel

const localPath = useLocalePath()
const router = useRouter()

const user = useSupabaseUser()

const email = user?.value?.email
const allGames = ref([])
//@ts-ignore
const myGames = computed(() => storeUser.value?.games?.join(',') || [])
const activeGames = computed(
    () => allGames.value?.filter((g) => g.status === 'ACTIVE') || [],
)
const otherGames = computed(
    () => allGames.value?.filter((g) => g.status !== 'ACTIVE') || [],
)

const getGamesUpdate = () => {
    realtimeChannel = supabase.channel('public:Games').on(
        'postgres_changes',
        {
            event: 'UPDATE',
            schema: 'public',
            table: 'Games',
            filter: `id=in.(${myGames.value})`,
        },
        (payload) => {
            // console.log('index payload:', payload)
            store.setToast({
                msg: `Game ${payload.new.title} updated`,
                type: 'info',
            })
        },
    )

    realtimeChannel.subscribe()
}

onMounted(async () => {
    // console.log('supa-user:', user)
    if (!storeUser.value) return
    getActiveGames()
})
watch(() => storeUser.value?.id, getActiveGames)
watch(() => myGames.value, getGamesUpdate)

async function getActiveGames() {
    // console.log('storeUser.value?.id:', storeUser.value?.id)
    if (!storeUser.value?.id) allGames.value = []
    else
        allGames.value = await $fetch(
            `/api/all-games?user_id=${storeUser.value?.id}`,
        )
}

const createNewGame = async () => {
    if (!storeUser.value?.id)
        return store.setToast({ msg: 'Please login first', type: 'warn' })
    const title = prompt('Enter game title', 'Untitled Game')
    if (!title) return

    try {
        const newGame = await $fetch('/api/create-game', {
            method: 'POST',
            body: {
                title,
                user_id: storeUser.value?.id,
            },
        })
        if (!newGame) throw new Error('game not created')
        router.push(`/game/${newGame.id}`)
    } catch (err) {
        console.error('there was an error', err)
    }
}

onUnmounted(() => {
    supabase.removeChannel(realtimeChannel)
})
</script>
