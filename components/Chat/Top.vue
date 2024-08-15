<template>
    <TourChat v-if="showChatTour" @closeTour="showChatTour = false" />
    <section class="mx-2 flex h-14 items-center justify-between md:mx-4">
        <div class="flex-center min-w-fit gap-1">
            <button class="w-min sm:hidden">
                <NuxtLink :to="localPath('/')">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="size-6">
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                </NuxtLink>
            </button>
            <ChatPlayersAvatarts :TurnOrderByIds="TurnOrderByIds" />
            <button
                class="rounded-full bg-accent-3/80 text-sm"
                title="Add player"
                @click="showModal">
                <!-- {{ $t('Game_Add_player') }} -->
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-9">
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
            </button>
        </div>
        <div class="flex-center min-w-fit flex-col">
            <small> {{ $t('Game_Score') }}: </small>
            <MiniCounter :n="storeGame?.score" />
        </div>
        <!-- :disabled="wordLength < 5"
        :class="wordLength > 5 ? 'bg-accent-3/20' : ''" -->
        <button
            v-if="gameMode === 'INPUT'"
            class="flex-center gap-1 rounded-full bg-accent-3/80 px-1 py-2 text-sm duration-200 hover:bg-accent-3/40 md:px-4"
            @click="$emit('changeGameMode')">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-4">
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
            </svg>
            {{ $t('Game_Switch_Guess') }}
        </button>
        <button
            v-else
            @click="showGameMenu = !showGameMenu"
            class="rounded-full bg-accent-3/80 p-[2px] text-sm md:px-4">
            <svg
                :class="showGameMenu ? 'rotate-90' : ''"
                class="size-8 duration-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor">
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
        </button>

        <Transition name="top-pop">
            <div
                v-if="showGameMenu"
                @click="showGameMenu = false"
                class="flex-center bg-bkg-dark/20 fixed inset-0 z-40">
                <div
                    class="flex-center z-50 flex-col gap-1 rounded-md bg-bkg p-3 text-content shadow-md shadow-content/15">
                    <h3 class="mb-4 border-b border-accent-3 text-2xl tracking-wider">
                        Game Options
                    </h3>
                    <div v-if="gameMode === 'SOLVE'" class="flex-center flex-col gap-1">
                        <button
                            @click="$emit('toggleRelaxCheck')"
                            class="flex-center w-full gap-1 py-2 text-accent-2 duration-200 hover:bg-bkg_dark/40">
                            {{ relaxCheckEnabled ? 'Disable' : 'Enable' }} Relax Check (allow
                            spelling errors)
                        </button>
                        <button
                            @click="$emit('getHint')"
                            class="flex-center w-full gap-1 py-2 text-accent-2 duration-200 hover:bg-bkg_dark/40">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="size-6">
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M16.712 4.33a9.027 9.027 0 0 1 1.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 0 0-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.014 9.014 0 0 1 0 9.424m-4.138-5.976a3.736 3.736 0 0 0-.88-1.388 3.737 3.737 0 0 0-1.388-.88m2.268 2.268a3.765 3.765 0 0 1 0 2.528m-2.268-4.796a3.765 3.765 0 0 0-2.528 0m4.796 4.796c-.181.506-.475.982-.88 1.388a3.736 3.736 0 0 1-1.388.88m2.268-2.268 4.138 3.448m0 0a9.027 9.027 0 0 1-1.306 1.652c-.51.51-1.064.944-1.652 1.306m0 0-3.448-4.138m3.448 4.138a9.014 9.014 0 0 1-9.424 0m5.976-4.138a3.765 3.765 0 0 1-2.528 0m0 0a3.736 3.736 0 0 1-1.388-.88 3.737 3.737 0 0 1-.88-1.388m2.268 2.268L7.288 19.67m0 0a9.024 9.024 0 0 1-1.652-1.306 9.027 9.027 0 0 1-1.306-1.652m0 0 4.138-3.448M4.33 16.712a9.014 9.014 0 0 1 0-9.424m4.138 5.976a3.765 3.765 0 0 1 0-2.528m0 0c.181-.506.475-.982.88-1.388a3.736 3.736 0 0 1 1.388-.88m-2.268 2.268L4.33 7.288m6.406 1.18L7.288 4.33m0 0a9.024 9.024 0 0 0-1.652 1.306A9.025 9.025 0 0 0 4.33 7.288" />
                            </svg>
                            Get Hint
                        </button>
                        <button
                            @click="$emit('revealWord')"
                            class="flex-center w-full gap-1 py-2 text-warn duration-200 hover:bg-bkg_dark/40">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="size-6">
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                            </svg>
                            Reveal latest word (-500 points)
                        </button>
                        <button
                            @click="() => (showChatTour = !showChatTour)"
                            class="flex-center w-full gap-1 py-2 text-content/80 duration-200 hover:bg-bkg_dark/40">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="size-6">
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                            </svg>
                            Restart Tour
                        </button>
                    </div>
                    <!-- <p v-else class="lowercase">{{ gameMode }}</p> -->
                </div>
            </div>
        </Transition>
    </section>
    <dialog
        ref="modal"
        class="add-user overflow-hidden rounded bg-bkg text-content backdrop:bg-black/50 backdrop:blur-2xl">
        <ModalAddUser @closeModal="modal.close()" />
    </dialog>
</template>

<script lang="ts" setup>
const props = defineProps({
    gameMode: String,
    wordLength: Number,
    feedback: String,
    TurnOrderByIds: Array,
    relaxCheckEnabled: Boolean,
})
const emit = defineEmits(['changeGameMode', 'getHint', 'revealWord', 'toggleRelaxCheck'])

const route = useRoute()
const router = useRouter()
const localPath = useLocalePath()

const store = useStore()
const { game: storeGame, user: storeUser } = storeToRefs(store)

const modal = ref(null)
const showGameMenu = ref(false)
const showChatTour = ref(false)

onMounted(() => {
    if (storeUser.value.games.length >= 1) {
        showChatTour.value = true
    } else if (route.hash === '#newGame') {
        showModal()
        router.replace({ hash: '' })
    }
})

const showModal = () => {
    modal.value.showModal()
}
</script>

<style scoped>
dialog.add-user {
    /* closing state */
    transition:
        display 0.8s ease,
        scale 0.5s ease,
        translate 0.5s ease;
    transition-behavior: allow-discrete;
    scale: 0;
    translate: -80px -300px;

    &[open] {
        /* default state */
        translate: 0;
        scale: 1;

        @starting-style {
            /* opening state */
            translate: -60px -60px;
            scale: 0;
        }
    }
}

.top-pop-enter-active,
.top-pop-leave-active {
    transition: all 0.6s ease;
}

.top-pop-enter-from,
.top-pop-leave-to {
    opacity: 0;
    transform: scale(0) translateY(-900px);
}
</style>
