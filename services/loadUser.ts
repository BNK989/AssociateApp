import type { User } from '~/types/user'

const store = useStore()

export async function loadUser() {
    const user = useSupabaseUser()
    if (!user.value) return //no user to load
    //@ts-ignore
    const dbUser: User = await $fetch(`/api/user/db-user?email=${user.value.email}`)
    store.setUser(dbUser)
    _updateUserPreferences()
}

const _updateUserPreferences = () => {
    const pref = store.userPref
    if (pref.theme) useHead({ htmlAttrs: { 'data-theme': pref.theme } })
}
