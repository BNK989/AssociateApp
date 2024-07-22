<template>
    <footer class="w-full p-1 md:p-8 lg:p-2">
        <div class="mx-auto max-w-screen-xl text-center">
            <span class="text-sm sm:text-center"
                >© 2021-{{ new Date().getFullYear() }}
                <a href="#" class="hover:underline">BNK™</a>. All Rights Reserved.</span
            >
            <!-- <button
                class="py-1 px-4 mx-4 bg-bkg_dark/20 rounded-full"
                @click="sendNotification('fdfdf')">
                Allow Notifications
            </button> -->
        </div>
    </footer>
</template>

<script setup>
import { sendNotification, checkNotificationPermission } from '@/services/notifications'
const route = useRoute()
onMounted(() => {
    setTimeout(checkNotificationPermission, 5 * 1000)
    document.addEventListener('visibilitychange', setIsHidden)
})

const store = useStore()
const { user: storeUser } = storeToRefs(store)

const supabase = useSupabaseClient()

const isHidden = ref(false)
// const myGames = computed(() => {
//     console.log('storeUser.value?.games:', storeUser.value?.games)
//     const allGames = storeUser.value?.games?.filter((g) => g !== +activeGame.value)
//     console.log('allGames:', allGames)
//     return allGames.join(',') || []
// })
const myGames = ref('')
const currGame = ref(null)

watch(
    () => route.path,
    () => {
        const regex = /game\/(.*)/
        const match = route.path.match(regex)
        let activeGame
        let allGames
        if (!match) {
            activeGame = null
        } else {
            activeGame = +match[1]
            currGame.value = activeGame
        }

        if (activeGame) {
            allGames = storeUser.value?.games?.filter((g) => g !== +activeGame.value)
        } else {
            allGames = storeUser.value?.games
        }
        myGames.value = allGames?.join(',') ?? []
        getGamesUpdate()
    },
)

const setIsHidden = () => {
    if (document.visibilityState !== 'visible') {
        isHidden.value = true
    } else {
        isHidden.value = false
    }
}

let realtimeChannel
const getGamesUpdate = () => {
    if (realtimeChannel) supabase.removeChannel(realtimeChannel)
    // if (myGames.value.length < 1) return
    realtimeChannel = supabase
        .channel('public:Games')
        .on(
            'postgres_changes',
            {
                event: 'UPDATE',
                schema: 'public',
                table: 'Games',
                filter: `id=in.(${myGames.value})`,
            },
            (payload) => {
                if (isHidden.value) {
                    sendNotification(`Game ${payload.new.title} updated`)
                } else if (payload.new.id != currGame.value) {
                    store.setToast({
                        msg: `Game ${payload.new.title} updated`,
                        type: 'info',
                    })
                }
            },
        )
        .on(
            'postgres_changes',
            {
                event: 'INSERT',
                schema: 'public',
                table: 'Invites',
                filter: `inviteeId=eq.${storeUser.value?.id}`,
            },
            (payload) => {
                const { id: InviteId, gameId, inviterId } = payload.new.id
                //TODO GET GAME TITLE
                // `${inviterName} has invited you to a game`
                if (isHidden.value) {
                    sendNotification(
                        `You have been invited to a game reload home page to view`,
                    )
                }
                store.incrementTotalInvites()
                store.setToast({
                    msg: `You have been invited to a game reload home page to view`,
                    type: 'success',
                    duration: 6000,
                })
            },
        )

    realtimeChannel.subscribe()
}

onUnmounted(() => {
    document.removeEventListener('visibilitychange', setIsHidden)
    if (!realtimeChannel) return
    supabase.removeChannel(realtimeChannel)
})
</script>
