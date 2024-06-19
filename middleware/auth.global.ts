export default defineNuxtRouteMiddleware(async (to, from) => {
    console.log('to.path:', to.path)
    if (!to.path.includes('profile1')) return
    const user = useSupabaseUser()
    if (!user.value) return navigateTo('/profile/login')
    return
})

