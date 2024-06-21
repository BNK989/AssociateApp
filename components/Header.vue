<template>
    <header>
        <nav class="border-gray-200 px-4 lg:px-6 py-2.5 shadow">
            <div
                class="relative flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                <NuxtLink to="/" class="flex items-center">
                    <img
                        src="../assets/img/Associate-logo.png"
                        class="mr-3 h-6 sm:h-9"
                        alt="Associate Logo" />
                    <span
                        class="self-center text-xl font-semibold whitespace-nowrap bg-gradient-to-l from-accent-1/70 to-accent-2/70 bg-clip-text text-transparent"
                        >Associate</span
                    >
                </NuxtLink>
                <div class="flex items-center lg:order-2">
                    <!-- <div v-if="!user" class="flex items-center lg:order-2"> -->
                    <!-- <div v-else>
                        <UserAvatarMenu />
                    </div> -->
                    <!-- <pre>{{ user?.user_metadata.name }}</pre> -->
                    <button
                        data-collapse-toggle="mobile-menu-2"
                        type="button"
                        class="inline-flex items-center p-2 ml-1 text-sm rounded-lg lg:hidden hover:bg-content/5 focus:outline-none focus:ring-2 focus:ring-content/5"
                        aria-controls="mobile-menu-2"
                        aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg
                            class="size-6"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                fill-rule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <svg
                            class="hidden size-6"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                fill-rule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </button>
                </div>
                <div
                    @click="closeBurgerMenu"
                    class="hidden lg:flex fixed left-0 shadow-lg md:shadow-none shadow-accent-2/10 flex-1 md:static md:bg-opacity-0 md:mx-4 z-10 bg-bkg border-t md:border-none border-content/10 top-14 w-full lg:w-auto lg:order-1"
                    id="mobile-menu-2">
                    <ul
                        class="w-full flex flex-col md:items-center mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 justify-between">
                        <li>
                            <ul
                                class="flex flex-col md:items-center mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 justify-between">
                                <li v-for="link in menu">
                                    <NuxtLink
                                        :to="link.url"
                                        class="block py-2 pr-4 pl-3 rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0"
                                        aria-current="page"
                                        >{{ link.name }}</NuxtLink
                                    >
                                </li>
                            </ul>
                        </li>
                        <li class="flex flex-col md:flex-row">
                            <button
                                class="m-4 md: my-0 hover:bg-content/10 p-2 rounded"
                                @click="toggleTheme">
                                <SvgDarkMode :isDark="isDark" />
                            </button>

                            <div
                                v-if="!user"
                                class="flex items-center justify-evenly bg-blue-200 bg-opacity-20 my-2 md:bg-opacity-0 md:my-0">
                                <NuxtLink
                                    to="/profile/login"
                                    class="hover:bg-content/10 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                                    >Log in</NuxtLink
                                >
                                <NuxtLink
                                    to="/profile/login?signup=true"
                                    class="hover:bg-content/10 bg-primary-700 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                                    >Get started</NuxtLink
                                >
                            </div>
                            <div
                                v-else
                                class="flex items-center justify-start gap-3 px-3 bg-blue-200 bg-opacity-20 my-2 py-2 md:bg-opacity-0 md:my-0">
                                <UserAvatar :user="storeUser" />
                                <button class="mx-2" @click="logout">
                                    logout
                                </button>
                            </div>
                            <!-- <pre>{{ user?.email?.split('@')[0]}}</pre> -->
                            <!-- <pre>pre: {{dbUser}}</pre> -->
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<script lang="ts" setup>
import type { User } from '~/types/user'
const store = useStore()
const { user: storeUser } = storeToRefs(store)

const colorMode = useColorMode()
const isDark = computed(() => colorMode.preference === 'dark')
const { menuData: menu } = useLocalData()

const user = useSupabaseUser()
const supabase = useSupabaseClient()
const { data: dbUser } = await useFetch(
    `/api/user/db-user?email=${user?.value?.email}`,
)

const toggleTheme = () => {
    colorMode.preference = colorMode.preference === 'light' ? 'dark' : 'light'
    useHead({ htmlAttrs: { 'data-theme': colorMode.preference } })
}

const closeBurgerMenu = () => {
    const menu = document.getElementById('mobile-menu-2')
    menu?.classList.remove('block')
    menu?.classList.add('hidden')
}

const logout = async () => {
    try {
        const { error } = await supabase.auth.signOut()
        if (error) throw error
        storeUser.value = null
    } catch (err) {
        console.error('there was an error', err)
    }
}

onMounted(() => {
    if (storeUser.value) return
    setTimeout(loadUser, 1000)
})

watch(
    () => storeUser.value,
    () => {
        if (storeUser.value) return
        setTimeout(loadUser, 1000)
    },
)

async function loadUser() {
    // console.log('loading user10')
    const user = useSupabaseUser()
    if (!user.value) return //no user to load
    // console.log('11supa-user:', user.value)
    //@ts-ignore
    const dbUser: User = await $fetch(`/api/user/db-user?email=${user.value.email}`)
    // console.log('dbUser:', dbUser)
    store.setUser(dbUser)
}
</script>
