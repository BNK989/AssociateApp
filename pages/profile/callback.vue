<template>
    <div>Loading...</div>
  </template>
  
  <script setup>
  
  const router = useRouter()
  const supabase = useSupabaseClient()
  
  onMounted(async () => {
    try {
      // Wait for the Supabase session to be established
      const { data: userData, error: userError } = await supabase.auth.getUser()
  
      if (userError) throw new Error(`Error fetching user data: ${userError.message}`)
      if (!userData || !userData.user) throw new Error('No user data found after login.')
  
      const user = userData.user
      const userEmail = user.email
      const { full_name, avatar_url } = user.user_metadata
  
      // console.log('User data:', userEmail, full_name, avatar_url)
  
      // Upsert user into your database
      const {user: newUser} = await $fetch('/api/user/upsert', {
        method: 'POST',
        body: { email: userEmail, name: full_name, avatar: avatar_url }
      })

      // await store.setUser(newUser)
      // console.log('newUser:', newUser)
  
      // Redirect to the desired page after successful login
      router.push('/')
    } catch (err) {
      console.error("There was an error at login:", err.message)
    }
  })
  </script>
  