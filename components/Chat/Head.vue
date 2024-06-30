<template>
    <section class="min-h-12 flex items-center justify-around">
        <div class="flex-center gap-1">
            <ChatPlayersAvatarts :TurnOrderByIds="TurnOrderByIds" />
            <button
                class="bg-accent-3/80 my-2 rounded-full text-sm"
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
        <button
            v-if="gameMode !== 'SOLVE' && wordLength > 5"
            class="p-2 bg-accent-3/80 my-2 rounded-full text-sm md:px-4"
            @click="$emit('changeGameMode')">
            {{ $t('Game_Switch_mode') }}
            {{ gameMode === 'INPUT' ? $t('Guess') : $t('Input') }}
        </button>
        <p class="text-sm">
            {{ $t('Game_Words_Count') }} {{ wordLength || 0 }}
        </p>
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
})
const emit = defineEmits(['changeGameMode'])
const modal = ref(null)

const showModal = () => {
    modal.value.showModal()
}
</script>
