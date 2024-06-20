<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

<script setup>
import { onMounted } from 'vue'
import {
    initAccordions,
    initCarousels,
    initCollapses,
    initDials,
    initDismisses,
    initDrawers,
    initDropdowns,
    initModals,
    initPopovers,
    initTabs,
    initTooltips,
} from 'flowbite'

// const store = useStore()
// const { user: storeUser } = storeToRefs(store)

// initialize components based on data attribute selectors
onMounted(() => {
    initAccordions()
    initCarousels()
    initCollapses()
    initDials()
    initDismisses()
    initDrawers()
    initDropdowns()
    initModals()
    initPopovers()
    initTabs()
    initTooltips()

    //MY FUNCTIONS
    // if (!storeUser.value) loadUser()
})

// async function loadUser() {
//     const user = useSupabaseUser()
//     const { data: dbUser } = await useFetch(
//         `/api/user/db-user?email=${user.value.email}`,
//     )
//     store.setUser(dbUser.value)
// }
</script>
