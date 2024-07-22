<template>
    <div class="flex-center h-dvh">
        <Spinner />
    </div>
</template>

<script setup>
const router = useRouter()
const supabase = useSupabaseClient()
const store = useStore()

const upsertAndLoadUser = async (email, name, avatar) => {
    const { user, error } = await $fetch('/api/user/upsert', {
        method: 'POST',
        body: { email, name, avatar },
    })
    if (error) throw error

    store.setUser(user)
    return user
}

onMounted(async () => {
    try {
        // Wait for the Supabase session to be established
        const { data: userData, error } = await supabase.auth.getUser()

        if (error) throw new Error(`Error fetching user data: ${error.message}`)
        if (!userData) throw new Error('No user data found after login.')

        const user = userData.user
        const userEmail = user.email
        const { full_name, avatar_url } = user.user_metadata

        const temp = await upsertAndLoadUser(userEmail, full_name, avatar_url)
        if (temp) router.push('/')
    } catch (err) {
        console.error('There was an error at login:', err)
        store.setToast({ msg: 'There was an error at login, ' + err, type: 'error' })
        router.push('/profile/login')
    }
})
</script>
