<template>
    <div>Loading...</div>
</template>

<script setup>
const router = useRouter()
const supabase = useSupabaseClient()
const store = useStore()

onMounted(async () => {
    try {
        // Wait for the Supabase session to be established
        const { data: userData, error: userError } =
            await supabase.auth.getUser()

        if (userError)
            throw new Error(`Error fetching user data: ${userError.message}`)
        if (!userData || !userData.user)
            throw new Error('No user data found after login.')

        const user = userData.user
        // console.log('22user:', user)
        const userEmail = user.email
        const { full_name, avatar_url } = user.user_metadata

        // console.log('User data:', userEmail, full_name, avatar_url)

        // Upsert user into your database
        const temp = await upsertAndLoadUser(userEmail, full_name, avatar_url)
        // console.log('newUser:', newUser)

        // Redirect to the desired page after successful login
    } catch (err) {
        console.error('There was an error at login:', err.message)
        store.setToast({ msg: 'There was an error at login', type: 'error' })
        push('/profile/login')
    }
})
const upsertAndLoadUser = async (email, name, avatar) => {
    const {user: newUser, error} = await $fetch('/api/user/upsert', {
        method: 'POST',
        body: { email, name, avatar },
    })
    if(error) throw error

    store.setUser(newUser)
    if (newUser) router.push('/')
}
</script>
