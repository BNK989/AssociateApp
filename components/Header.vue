<template>
    <header>
        <nav class="border-gray-200 px-4 lg:px-6 py-1.5 shadow">
            <div
                class="relative flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                <NuxtLink :to="localPath('/')" class="flex items-center">
                    <img
                        src="../assets/img/Associate-logo.png"
                        class="mr-3 size-10 sm:h-9"
                        alt="Associate Logo" />
                    <span
                        class="self-center text-xl font-semibold whitespace-nowrap bg-gradient-to-l from-accent-1 to-accent-2 bg-clip-text text-transparent"
                        >Associate</span
                    >
                </NuxtLink>
                <div class="flex items-center lg:order-2">
                    <button
                        @click="showUserMenu = false"
                        type="button"
                        class="burger-menu inline-flex items-center p-2 ml-1 text-sm rounded-lg lg:hidden hover:bg-content/5 focus:outline-none focus:ring-2 focus:ring-content/5"
                        popovertarget="mobile-menu-2">
                        <span class="sr-only">Open main menu</span>
                        <svg
                            class="btn-open size-6"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                fill-rule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <svg
                            class="btn-close size-6 hidden"
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
                    popover
                    class="md:flex md:flex-1 fixed h-max overflow-visible inset-none m-0 top-12 md:top-0 shadow-lg text-content md:shadow-none shadow-accent-2/10 md:relative md:bg-opacity-0 md:mx-4 z-10 bg-bkg border-t md:border-none border-content/10 w-full lg:w-auto lg:order-1"
                    id="mobile-menu-2">
                    <ul
                        class="w-full flex flex-col md:items-center mt-4 font-medium lg:flex-row lg:mt-0 justify-between">
                        <li>
                            <ul
                                class="flex flex-col gap-4 md:items-center my-4 md:my-0 font-medium lg:flex-row lg:mt-0 justify-between">
                                <li v-for="link in menu" class="relative">
                                    <NuxtLink
                                        @click="hideThePopover"
                                        :to="localPath(link.url)"
                                        class="block py-2 pr-4 pl-3 rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0"
                                        aria-current="page"
                                        >{{
                                            $t(`Menu_${link.name.replaceAll(' ', '_')}`)
                                        }}</NuxtLink
                                    >
                                    <span
                                        v-if="link.name === 'Invites' && totalInvites > 0"
                                        class="invite-badge absolute size-5 w-fit px-1 flex-center bg-accent-1/90 shadow-lg shadow-content/25 rounded-full -top-3 left-16 md:left-10 text-sm"
                                        >{{ totalInvites }}</span
                                    >
                                </li>
                                <li>
                                    <button @click="store.incrementTotalInvites()">
                                        TEST
                                    </button>
                                </li>
                            </ul>
                        </li>
                        <li class="flex flex-col md:flex-row">
                            <ul class="flex items-center justify-start">
                                <li>
                                    <select
                                        v-model="selectedLocale"
                                        class="bg-bkg ms-2 me-4 min-w-24 focus-visible:outline focus-visible:outline-bkg_dark">
                                        <option
                                            v-for="l in locales"
                                            :key="l.code"
                                            :value="l.code">
                                            {{ l.name }}
                                        </option>
                                    </select>
                                </li>
                                <li>
                                    <button
                                        class="m-4 md: my-0 hover:bg-content/10 p-2 rounded"
                                        @click="toggleTheme">
                                        <SvgDarkMode :isDark="isDark" />
                                    </button>
                                </li>
                            </ul>
                            <div
                                @click="hideThePopover"
                                v-if="!user"
                                class="flex items-center justify-evenly gap-2 bg-blue-200 bg-opacity-20 my-2 md:bg-opacity-0 md:my-0">
                                <NuxtLink
                                    :to="localPath('/profile/login')"
                                    class="hover:bg-content/10 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                                    >{{ $t('Login') }}</NuxtLink
                                >
                                <NuxtLink
                                    :to="localPath('/profile/login?signup=true')"
                                    class="hover:bg-content/10 bg-primary-700 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                                    >{{ $t('Signup') }}</NuxtLink
                                >
                            </div>
                            <div
                                v-else
                                class="relative flex-center min-h-14 md:min-h-10 gap-3 px-3 bg-blue-200 bg-opacity-20 my-2 py-2 md:py-0 md:bg-opacity-0 md:my-0">
                                <button @click="showUserMenu = !showUserMenu">
                                    <div
                                        class="border-2 p-[2px] rounded-full border-y-accent-3 border-x-accent-1 rotate-45">
                                        <UserAvatar
                                            :user="storeUser"
                                            class="-rotate-45" />
                                    </div>
                                </button>

                                <!-- Popover menu Start -->

                                <transition name="pop">
                                    <div
                                        v-if="showUserMenu"
                                        @click="hideThePopover"
                                        class="absolute top-12 bg-bkg shadow-xl shadow-bkg_dark/40 rounded h-fit w-fit divide-y divide-accent-3/50">
                                        <div class="px-4 py-3 text-sm">
                                            <div>{{ storeUser?.userName }}</div>
                                            <div
                                                class="font-medium truncate text-content/50">
                                                {{ storeUser?.email }}
                                            </div>
                                        </div>
                                        <ul
                                            class="py-2 text-sm"
                                            aria-labelledby="avatarButton">
                                            <li>
                                                <NuxtLink
                                                    to="/profile/Scoreboard"
                                                    class="block px-4 py-2 hover:bg-bkg_dark/50"
                                                    >Scoreboard
                                                </NuxtLink>
                                            </li>
                                            <li>
                                                <NuxtLink
                                                    to="/profile/Preferences"
                                                    class="block px-4 py-2 hover:bg-bkg_dark/50"
                                                    >Preferences
                                                </NuxtLink>
                                            </li>
                                        </ul>
                                        <div class="py-1">
                                            <button
                                                @click="logout"
                                                class="block px-4 py-2 text-sm hover:bg-bkg_dark/50">
                                                Log out
                                            </button>
                                        </div>
                                    </div>
                                </transition>

                                <!-- Popover menu end -->
                                <h6>
                                    {{ $t('Menu_Hi') }},
                                    {{ storeUser?.userName.split(' ')[0] }}
                                </h6>
                                <button class="mx-2" @click="logout">
                                    <!-- hideThePopover -->
                                    {{ $t('Logout') }}
                                </button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<script lang="ts" setup>
import type { User } from '~/types/user'
import gsap from 'gsap'
const store = useStore()
const { user: storeUser, totalInvites } = storeToRefs(store)

import { loadUser } from '@/services/loadUser'

const router = useRouter()

const { locale, setLocale, locales } = useI18n()
const localPath = useLocalePath()
const selectedLocale = computed({
    get: () => locale.value,
    set: (v) => setLocale(v),
})

watch(
    () => locale.value,
    () => {
        const dir = locale.value === 'he' ? 'rtl' : 'ltr'
        document.documentElement.setAttribute('dir', dir)
        setLocale(locale.value)
    },
)
watch(
    () => totalInvites.value,
    () => {
        if (totalInvites.value > 0) {
            gsap.fromTo(
                '.invite-badge',
                { y: 0 },
                {
                    y: -10,
                    duration: 0.3,
                    yoyo: true,
                    repeat: 1,
                },
            )
        }
    },
)
onMounted(() => {
    if (store.userPref) {
        watch(
            () => store.userPref.language,
            (newLanguage) => {
                const dir = newLanguage === 'he' ? 'rtl' : 'ltr'
                document.documentElement.setAttribute('dir', dir)
                setLocale(newLanguage)
            },
        )
    }
})

const colorMode = useColorMode()
const isDark = computed(() => colorMode.preference === 'dark')
const { menuData: menu } = useLocalData()

const user = useSupabaseUser()
const supabase = useSupabaseClient()
const { data: dbUser } = await useFetch(`/api/user/db-user?email=${user?.value?.email}`)

const hideThePopover = () => {
    const popover = document.getElementById('mobile-menu-2')
    popover.hidePopover()
    showUserMenu.value = false
}

const showUserMenu = ref(false)

const toggleTheme = () => {
    colorMode.preference = colorMode.preference === 'light' ? 'dark' : 'light'
    useHead({ htmlAttrs: { 'data-theme': colorMode.preference } })
}

const logout = async () => {
    if (!user.value) return
    try {
        const { error } = await supabase.auth.signOut()
        if (error) {
            if (error.message === 'Session from session_id claim in JWT does not exist') {
                console.warn('Session does not exist or has already been invalidated.')
            } else {
                throw error
            }
        }
        storeUser.value = null
        showUserMenu.value = false
        router.push({ path: '/' })
    } catch (err) {
        console.error('There was an error during sign out:', err)
    }
}

onMounted(() => {
    if (storeUser.value) return
    setTimeout(loadUser, 1)
})

watch(
    () => storeUser.value,
    () => {
        if (storeUser.value) return
        setTimeout(loadUser, 1)
    },
)
</script>

<style>
:has(:popover-open) .burger-menu svg:first-of-type {
    display: none;
}

:has(:popover-open) .burger-menu svg:last-of-type {
    display: block;
}
@media (max-width: 1024px) {
    [popover] {
        animation: slide-in 0.6s ease;
    }
}

.pop-enter-active {
    animation: pop-in 0.5s;
}
.pop-leave-active {
    animation: pop-in 0.5s reverse;
}
@keyframes pop-in {
    0% {
        transform: scale(0);
    }
    50% {
        transform: scale(1.25);
    }
    100% {
        transform: scale(1);
    }
}

@keyframes slide-in {
    0% {
        transform: translateY(-400px);
        opacity: 0;
    }
    80% {
        opacity: 1;
        transform: translateY(20px);
    }
    90% {
        opacity: 1;
        transform: translateY(-10px);
    }
    100% {
        transform: translateY(0);
    }
}
</style>
