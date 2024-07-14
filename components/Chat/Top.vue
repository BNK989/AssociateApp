<template>
    <section class="h-14 flex items-center justify-between mx-2 md:mx-4">
        <div class="flex-center gap-1 min-w-fit">
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
                class="bg-accent-3/80 rounded-full text-sm"
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
        <div class="flex-center flex-col min-w-fit">
            <small> {{ $t('Game_Score') }}: </small>
            <MiniCounter :n="storeGame?.score" />
        </div>
        <!-- :disabled="wordLength < 5"
        :class="wordLength > 5 ? 'bg-accent-3/20' : ''" -->
        <button
            v-if="gameMode === 'INPUT'"
            class="flex-center gap-1 px-1 bg-accent-3/80 rounded-full text-sm md:px-4 hover:bg-accent-3/40 py-2 duration-200"
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
            class="p-[2px] bg-accent-3/80 rounded-full text-sm md:px-4">
            <svg
                :class="showGameMenu ? 'rotate-90' : ''"
                class="duration-300 size-8"
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
                class="flex-center bg-bkg-dark/20 z-40 fixed inset-0">
                <div
                    class="flex-center gap-1 flex-col bg-bkg text-content rounded-md z-50 p-3 shadow-md shadow-content/15">
                    <h3 class="tracking-wider text-2xl border-b border-accent-3 mb-4">
                        Game Options
                    </h3>
                    <div v-if="gameMode === 'SOLVE'" class="flex-center flex-col gap-1">
                        <button
                            @click="$emit('toggleRelaxCheck')"
                            class="flex-center gap-1 text-accent-2 hover:bg-bkg_dark/40 w-full py-2 duration-200">
                            {{ relaxCheckEnabled ? 'Disable' : 'Enable' }} Relax Check
                            (allow spelling errors)
                        </button>
                        <button
                            @click="$emit('getHint')"
                            class="flex-center gap-1 text-accent-2 hover:bg-bkg_dark/40 w-full py-2 duration-200">
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
                            class="flex-center gap-1 text-warn hover:bg-bkg_dark/40 w-full py-2 duration-200">
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
                    </div>
                    <!-- <p v-else class="lowercase">{{ gameMode }}</p> -->
                </div>
            </div>
        </Transition>
    </section>
    <dialog
        ref="modal"
        class="bg-bkg text-content backdrop:blur-2xl backdrop:bg-black/50 rounded">
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
const localPath = useLocalePath()

const store = useStore()
const { game: storeGame } = storeToRefs(store)

const modal = ref(null)
const showGameMenu = ref(false)

onMounted(() => {
    if (route.hash === '#newGame') {
        showModal()
    }
})

const showModal = () => {
    modal.value.showModal()
}
</script>

<style scoped>
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
