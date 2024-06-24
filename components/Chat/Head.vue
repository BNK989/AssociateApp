<template>
    <section
        class="min-h-12 flex items-center justify-around">
        <p class="text-sm" >{{$t('Game_Words_Count')}} {{ wordLength || 0 }}</p>
        <button
            class="p-2 bg-accent-3/80 my-2 rounded-full text-sm  md:px-4"
            @click="$emit('changeGameMode')">
            {{$t('Game_Switch_mode')}} {{ gameMode === 'INPUT' ? $t('Guess') : $t('Input') }}
        </button>
        <button
            class="p-2 bg-accent-3/80 my-2 rounded-full  text-sm md:px-4"
            @click="showModal">
            {{$t('Game_Add_player')}}
        </button>
    </section>
    <dialog ref="modal" class="bg-bkg text-content backdrop:blur-2xl backdrop:bg-black/50 rounded">
            <ModalAddUser @closeModal="modal.close()"/>
    </dialog>
</template>

<script lang="ts" setup>
const props = defineProps({
    gameMode: String,
    wordLength: Number,
    feedback: String,
})
const emit = defineEmits(['changeGameMode'])
const modal = ref(null)

const showModal = () => {
    modal.value.showModal()
}
</script>