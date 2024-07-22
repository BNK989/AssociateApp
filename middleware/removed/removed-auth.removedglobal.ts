// import type { User } from "~/types/user"

// export default defineNuxtRouteMiddleware(async (to, from) => {
//     const store = useStore()
//     const { user: storeUser } = storeToRefs(store)
//     console.log('storeUser:', storeUser.value)

//     if(storeUser.value) return
//     //LOAD USET FROM SUPABASE
//     setTimeout(loadUser, 1000)
//     async function loadUser() {
//         // console.log('loading user10')
//         const user = useSupabaseUser()
//         if (!user.value) return //no user to load
//         // console.log('11supa-user:', user.value)
//         const dbUser: User = await $fetch(`/api/user/db-user?email=${user.value.email}`)
//         // console.log('dbUser:', dbUser)
//         store.setUser(dbUser)
//     }

//     return
// })
