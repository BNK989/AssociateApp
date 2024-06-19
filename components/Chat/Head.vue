<template>
    <section
        class="border border-white min-h-8 flex items-center justify-around">
        <p>Words to recall : {{ wordLength - 1 }}</p>
        <p>{{ feedback }}</p>
        <button
            class="px-3 py-2 bg-accent-3 my-2 rounded-full"
            @click="$emit('changeGameMode')">
            Switch to {{ gameMode === 'INPUT' ? 'guess' : 'input' }}
        </button>
        <button
            class="px-3 py-2 bg-accent-3 my-2 rounded-full"
            @click="showModal">
            Add Player
        </button>
    </section>
    <dialog ref="modal" class="bg-bkg text-content backdrop:blur-2xl backdrop:bg-black/50 rounded">
        <transition>
            <ModalAddUser @closeModal="modal.close()"/>
        </transition>
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

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>