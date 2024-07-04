<template>
    <footer class="w-full p-1 md:p-8 lg:p-2">
        <div class="mx-auto max-w-screen-xl text-center">
            <span class="text-sm sm:text-center"
                >© 2021-{{ new Date().getFullYear() }}
                <a href="#" class="hover:underline">BNK™</a>. All Rights
                Reserved.</span
            >
        </div>
    </footer>
</template>

<script setup>
const store = useStore()
const { user: storeUser } = storeToRefs(store)
const myGames = computed(() => storeUser.value?.games?.join(',') || [])

const supabase = useSupabaseClient()

let realtimeChannel
const getGamesUpdate = () => {
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
                store.setToast({
                    msg: `Game ${payload.new.title} updated`,
                    type: 'info',
                })
            },
        )
        .on(
            'postgres_changes',
            {
                event: 'INSERT',
                schema: 'public',
                table: 'Invites',
                filter: `inviteeId=eq.${storeUser.value.id}`,
            },
            (payload) => {
                console.log('payload:', payload)
                const { id: InviteId, gameId, inviterId } = payload.new.id
                //TODO GET GAME TITLE
                // `${inviterName} has invited you to a game`
                store.setToast({
                    msg: `You have been invited to a game reload home page to view`,
                    type: 'success',
                    duration: 6000,
                })
            },
        )

    realtimeChannel.subscribe()
    console.log('realtimeChannel:', realtimeChannel)
}

watch(() => myGames.value, getGamesUpdate)

onUnmounted(() => {
    if (!realtimeChannel) return
    supabase.removeChannel(realtimeChannel)
})
</script>
