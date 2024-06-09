export default defineNuxtRouteMiddleware(async (to, from) => {
    // console.log('to.path:', to.path)
    if (!to.path.includes('profile')) return
    const user = useSupabaseUser()
    if (!user.value) return navigateTo('/login')
    return
})