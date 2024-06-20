<template>
    <section>
        <div
            class="flex flex-col items-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div class="flex w-full justify-center items-center mb-2">
                <img
                    class="size-12 mr-2"
                    src="../../assets/img/Associate-logo.png"
                    alt="logo" />
                <h4
                    class="flex items-center text-4xl font-semibold bg-gradient-to-l from-accent-1/80 to-accent-2/80 bg-clip-text text-transparent">
                    Associate
                </h4>
            </div>
            <div
                class="w-full rounded-lg shadow-xl shadow-accent-2/10 md:mt-0 sm:max-w-md xl:p-0 border border-accent-2/60">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1
                        class="text-xl font-bold leading-tight tracking-tight md:text-2xl">
                        Sign in to your account
                    </h1>
                    <div
                        class="my-4 flex items-center gap-2 whitespace-nowrap flex-wrap">
                        <button
                            @click="googleLogin"
                            class="border border-gray-600 rounded px-4 py-2 flex justify-center items-center w-full cursor-pointer">
                            <svg
                                class="w-5 h-5 mr-2 -ml-1"
                                viewBox="0 0 21 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_13183_10121)">
                                    <path
                                        d="M20.3081 10.2303C20.3081 9.55056 20.253 8.86711 20.1354 8.19836H10.7031V12.0492H16.1046C15.8804 13.2911 15.1602 14.3898 14.1057 15.0879V17.5866H17.3282C19.2205 15.8449 20.3081 13.2728 20.3081 10.2303Z"
                                        fill="#3F83F8"></path>
                                    <path
                                        d="M10.7019 20.0006C13.3989 20.0006 15.6734 19.1151 17.3306 17.5865L14.1081 15.0879C13.2115 15.6979 12.0541 16.0433 10.7056 16.0433C8.09669 16.0433 5.88468 14.2832 5.091 11.9169H1.76562V14.4927C3.46322 17.8695 6.92087 20.0006 10.7019 20.0006V20.0006Z"
                                        fill="#34A853"></path>
                                    <path
                                        d="M5.08857 11.9169C4.66969 10.6749 4.66969 9.33008 5.08857 8.08811V5.51233H1.76688C0.348541 8.33798 0.348541 11.667 1.76688 14.4927L5.08857 11.9169V11.9169Z"
                                        fill="#FBBC04"></path>
                                    <path
                                        d="M10.7019 3.95805C12.1276 3.936 13.5055 4.47247 14.538 5.45722L17.393 2.60218C15.5852 0.904587 13.1858 -0.0287217 10.7019 0.000673888C6.92087 0.000673888 3.46322 2.13185 1.76562 5.51234L5.08732 8.08813C5.87733 5.71811 8.09302 3.95805 10.7019 3.95805V3.95805Z"
                                        fill="#EA4335"></path>
                                </g>
                                <defs>
                                    <clipPath id="clip0_13183_10121">
                                        <rect
                                            width="20"
                                            height="20"
                                            fill="white"
                                            transform="translate(0.5)"></rect>
                                    </clipPath>
                                </defs>
                            </svg>
                            Log in with Google
                        </button>
                    </div>
                    <form
                        class="space-y-4 md:space-y-6"
                        @submit.prevent="signupSignin">
                        <div v-if="isSignup">
                            <label
                                for="userName"
                                class="block mb-2 text-sm font-medium"
                                >User name</label
                            >
                            <input
                                type="text"
                                name="userName"
                                v-model="userName"
                                id="userName"
                                placeholder="John Wick"
                                class="border bg-bkg border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                :required="isSignup" />
                        </div>
                        <div>
                            <label
                                for="email"
                                class="block mb-2 text-sm font-medium"
                                >Your email</label
                            >
                            <input
                                type="email"
                                name="email"
                                v-model="email"
                                id="email"
                                class="bg-bkg border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                placeholder="name@company.com"
                                required="true" />
                        </div>
                        <div>
                            <label
                                for="password"
                                class="block mb-2 text-sm font-medium"
                                >Password</label
                            >
                            <input
                                type="password"
                                name="password"
                                v-model="pw"
                                id="password"
                                placeholder="••••••••"
                                class="border bg-bkg border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                required="true" />
                        </div>
                        <div v-if="isSignup">
                            <label
                                for="confirm_password"
                                class="block mb-2 text-sm font-medium"
                                >Confirm Password</label
                            >
                            <input
                                type="password"
                                name="confirm_password"
                                v-model="confirmPw"
                                id="confirm_password"
                                placeholder="••••••••"
                                class="border bg-bkg border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                :required="isSignup" />
                        </div>
                        <div class="flex items-center justify-between">
                            <div class="flex items-start">
                                <div class="flex items-center h-5">
                                    <input
                                        id="remember"
                                        aria-describedby="remember"
                                        type="checkbox"
                                        class="w-4 h-4 border border-gray-300 rounded focus:ring-3 focus:ring-primary-300"
                                        required="false" />
                                </div>
                                <div class="ml-3 text-sm">
                                    <label for="remember">Remember me</label>
                                </div>
                            </div>
                            <a
                                href="#"
                                class="text-sm font-medium text-primary-600 hover:underline"
                                >Forgot password?</a
                            >
                        </div>
                        <button
                            type="submit"
                            class="w-full text-white bg-accent-2/50 hover:bg-accent-2/75 duration-300 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                            Sign {{ isSignup ? 'up' : 'in' }}
                        </button>
                        <p
                            v-if="successMsg"
                            class="font-light text-green-500 capitalize">
                            {{ successMsg }}
                        </p>
                        <p
                            v-if="errMsg"
                            class="font-light text-red-500 capitalize">
                            {{ errMsg }}
                        </p>
                        <button
                            @click="isSignup = !isSignup"
                            class="text-sm font-light">
                            {{ switchText }} Sign {{ isSignup ? 'in' : 'up' }}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
const store = useStore()
const { user: storeUser } = storeToRefs(store)

const router = useRouter()
const isSignup = ref(false)
const supabase = useSupabaseClient()
const user = useSupabaseUser()
const userName = ref('')
const email = ref('')
const pw = ref('')
const confirmPw = ref('')
const successMsg = ref('')
const errMsg = ref('')
const switchText = computed(() => {
    return isSignup.value
        ? 'Already have an account?'
        : 'Don’t have an account yet?'
})

const googleLogin = async () => {
    try {
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: `${window.location.origin}/profile/callback`,
                // redirectTo: `https://associate-app-5sli.vercel.app/profile/callback111`,
            },
        })
        if (error) throw new Error(`OAuth sign-in error: ${error.message}`)
    } catch (err) {
        console.error('there was an error at login', err)
    }
    }

const signupSignin = () => {
    successMsg.value = ''
    errMsg.value = ''
    isSignup.value ? signup() : signin()
}

const signup = async () => {
    try {
        if (pw.value !== confirmPw.value)
            throw new Error('passwords do not match')
        const { data, error } = await supabase.auth.signUp({
            email: email.value,
            password: pw.value,
            options: {
                data: {
                    full_name: userName.value,
                    avatar_url: 'https://i.pravatar.cc/300',
                },
            },
        })
        if (error) throw error
        successMsg.value = 'Check your email to confirm your account'
    } catch (error: any) {
        console.error('there was an error at signup', error)
        errMsg.value = error.message
    }
    //TODO: IF SUCESSFUL --> ADD CONFIRMATION request
    // got to home page
}

// TODO: NOT CHECKED!!!
const signin = async () => {
    try {
        const { error } = await supabase.auth.signInWithPassword({
            email: email.value,
            password: pw.value,
        })
        if (error) throw error
        successMsg.value = 'You are logged in'
        await piniaUser()
        router.push('/profile/callback')
    } catch (error: any) {
        console.error('there was an error while sign in', error)
        errMsg.value = error.message
    }
}

async function piniaUser() {
    const user = useSupabaseUser()
    if (!user.value) return //no user to load
    //@ts-ignore
    const dbUser: User = await $fetch(`/api/user/db-user?email=${user.value.email}`)
    store.setUser(dbUser)
}
</script>
