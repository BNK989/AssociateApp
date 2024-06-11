<template>
    <header>
        <nav
            class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 shadow">
            <div
                class="relative flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                <NuxtLink to="/" class="flex items-center">
                    <img
                        src="https://flowbite.com/docs/images/logo.svg"
                        class="mr-3 h-6 sm:h-9"
                        alt="Associate Logo" />
                    <span
                        class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
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
                        class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="mobile-menu-2"
                        aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg
                            class="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                fill-rule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <svg
                            class="hidden w-6 h-6"
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
                    class="hidden lg:flex absolute flex-1 md:static md:bg-opacity-0 md:mx-4 z-10 bg-blue-950 top-12 w-dvw -left-4 lg:w-auto lg:order-1"
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
                                class="m-4 md: my-0"
                                @click="
                                    colorMode.preference === 'light'
                                        ? (colorMode.preference = 'dark')
                                        : (colorMode.preference = 'light')
                                ">
                                <SvgDarkMode :isDark="isDark" />
                            </button>

                            <div
                                v-if="!user"
                                class="flex items-center justify-evenly bg-blue-200 bg-opacity-20 my-2 md:bg-opacity-0 md:my-0">
                                <NuxtLink
                                    to="/profile/login"
                                    class="hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                                    >Log in</NuxtLink
                                >
                                <NuxtLink
                                    to="/profile/login"
                                    class="bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                                    >Get started</NuxtLink
                                >
                            </div>
                            <div
                                v-else
                                class="flex items-center justify-start px-3 bg-blue-200 bg-opacity-20 my-2 py-2 md:bg-opacity-0 md:my-0 gap-3">
                                <UserAvatar :user="user" />
                                <button @click="logout" >logout</button>
                            </div>
                            <!-- <pre>{{ user?.email?.split('@')[0]}}</pre> -->
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<script lang="ts" setup>
const colorMode = useColorMode()
const isDark = computed(() => colorMode.preference === 'dark')
const { menuData: menu } = useLocalData()

const user = useSupabaseUser()
const supabase = useSupabaseClient()

const logout = async () => {
    try{
        const { error } = await supabase.auth.signOut()
        if(error) throw error
    }
    catch(err){
        console.error("there was an error", err)
    }
}
</script>
