<template>
    <Transition>
        <div
            v-if="content"
            @click="showToast"
            class="z-20 fixed top-8 mx-auto md:top-16 md:right-7 flex items-center w-full px-4 py-2 bg-accent-3 text-content rounded-lg shadow md:max-w-96"
            :class="toastClass"
            role="alert">
            <div
                class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-lg bg-accent-3/40">
                <svg
                    class="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 20">
                    <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15.147 15.085a7.159 7.159 0 0 1-6.189 3.307A6.713 6.713 0 0 1 3.1 15.444c-2.679-4.513.287-8.737.888-9.548A4.373 4.373 0 0 0 5 1.608c1.287.953 6.445 3.218 5.537 10.5 1.5-1.122 2.706-3.01 2.853-6.14 1.433 1.049 3.993 5.395 1.757 9.117Z" />
                </svg>
                <span class="sr-only">Fire icon</span>
            </div>
            <div class="ms-3 text-sm font-normal">{{ content }}</div>
            <button
                type="button"
                @click="hideToast"
                class="ms-auto -mx-1.5 -my-1.5 hover:text-content/80 rounded-lg focus:ring-2 focus:ring-content/80 p-1.5 hover:bg-accent-3 inline-flex items-center justify-center size-8">
                <span class="sr-only">Close</span>
                <svg
                    class="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14">
                    <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
            </button>
        </div>
    </Transition>
</template>

<script setup lang="ts">
const store = useStore()
const content = ref('')
const toastClass = ref({})
let timeoutId : number

watch(
    () => store.toast,
    () => {
        showToast(store.toast)
    },
)
const showToast = ({ msg, type = 'info', duration = 3000 }) => {
    clearTimeout(timeoutId)
    content.value = msg
        toastClass.value = {
            'bg-accent-1': type === 'success',
            'bg-accent-2': type === 'info',
            'bg-accent-2': type === 'oops',
            'bg-red-600': type === 'warn',
            'bg-red-800': type === 'error',
        }
        timeoutId = setTimeout(hideToast, duration)
}

const hideToast = () => {
    content.value = ''
}
</script>

<style scoped>

/* .v-enter-from, */
.v-leave-to {
    transform: translateY(-120px);
}

/* .v-enter-to, */
.v-leave-from {
    transform: translateY(-1px);
}

.v-enter-active{
    animation: wobble .75s cubic-bezier(0.25, 0.1, 0.29, 1.82);
}

.v-leave-active {
    transition: transform .5s ease;
}

@keyframes wobble {
    0% { transform: translateY(-100px); }
    50% { transform: translateY(0); }
    60% { transform: translateX(8px); }
    70% { transform: translateX(-8px); }
    80% { transform: translateX(4px); }
    90% { transform: translateX(-4px); }
    100% { transform: translateX(0); }
}
</style>