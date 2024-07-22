<template>
    <div>Loading...</div>
</template>

<script setup>
const router = useRouter()
const supabase = useSupabaseClient()
const store = useStore()

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
    try {
        // Wait for the Supabase session to be established
        const { data: userData, error: userError } = await supabase.auth.getUser()

        if (userError) throw new Error(`Error fetching user data: ${userError.message}`)
        if (!userData || !userData.user) throw new Error('No user data found after login.')

        const user = userData.user
        const userEmail = user.email
        const { full_name, avatar_url } = user.user_metadata

        const temp = await upsertAndLoadUser(userEmail, full_name, avatar_url)
    } catch (err) {
        console.error('There was an error at login:', err)
        store.setToast({ msg: 'There was an error at login, ' + err, type: 'error' })
        router.push('/profile/login')
    }
})
</script>
