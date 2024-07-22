<template>
    <div class="flex-center mx-2 my-auto flex-col gap-4">
        <h2
            class="my-4 bg-gradient-to-r from-accent-3 to-accent-2 bg-clip-text text-center text-3xl text-transparent">
            You've been invited to join a game
        </h2>
        <button
            class="w-3/5 rounded border-2 border-bkg_dark/30 bg-gradient-to-tr from-accent-2 to-accent-3 px-6 py-3 text-2xl font-bold shadow-xl shadow-accent-3/15 duration-300 hover:bg-accent-3/50"
            @click="joinGame">
            Join Now
        </button>
    </div>
</template>

<script setup>
const route = useRoute()
const router = useRouter()

const supabase = useSupabaseClient()

const store = useStore()
const { user: storeUser } = storeToRefs(store)

const gameId = route?.params?.gameid

const joinGame = async () => {
    if (!storeUser.value) return store.setToast({ msg: 'Please login first', type: 'warn' })
    try {
        const { error, success } = await $fetch(`/api/${gameId}/add-user-by-link`, {
            method: 'PUT',
            body: {
                user_id: storeUser.value?.id,
            },
        })

        if (error) throw new Error(error)
        if (success) router.push(`/game/${gameId}`)
        else store.setToast({ msg: 'Issue joining game', type: 'error' })
    } catch (err) {
        console.error('there was an error at join game', err)
    }
}

const upsertAndLoadUser = async (email, name, avatar) => {
    const { user: newUser, error } = await $fetch('/api/user/upsert', {
        method: 'POST',
        body: { email, name, avatar },
    })
    if (error) throw error

    store.setUser(newUser)
    if (newUser) router.push('/')
}

onMounted(async () => {
    if (!storeUser) {
        try {
            const { data: userData, error: userError } = await supabase.auth.getUser()

            if (userError) throw new Error(`Error fetching user data: ${userError.message}`)
            // if (!userData || !userData.user)
            //     throw new Error('No user data found after login.')

            const user = userData.user
            const userEmail = user.email
            const { full_name, avatar_url } = user.user_metadata

            await upsertAndLoadUser(userEmail, full_name, avatar_url)
        } catch (err) {
            console.error('There was an error at login:', err)
            store.setToast({
                msg: 'There was an error at login',
                type: 'error',
            })
            router.push('/profile/login')
        }
    }
})
</script>
