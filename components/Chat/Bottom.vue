<template>
    <section class="border-accent-3/40 min-h-8 shadow-2xl shadow-white sm:shadow-none">
        <form @submit.prevent="onHandleSubmit">
            <div class="relative">
                <input
                    type="text"
                    class="block w-full p-4 ps-4 text-sm bg-bkg md:border border-accent-3/40 rounded-lg focus:ring-accent-3/10 focus:border-accent-3/10 focus:outline-none"
                    :placeholder="placeholder"
                    v-model="word" />
                <button
                    type="submit"
                    :class="gameMode === 'SOLVE' ? 'bg-accent-1' : 'bg-accent-3'"
                    class="min-w-32 absolute end-2.5 bottom-2.5 hover:bg-accent-3/75 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">
                    {{btnTxt}}
                </button>
            </div>
        </form>
    </section>
</template>

<script lang="ts" setup>
const props = defineProps({
    gameMode: String,
})
const word = ref('')
const emit = defineEmits(['handleSubmit'])
const placeholder = computed(() => props.gameMode === 'INPUT' ? 'Type the next word...' : 'Guess the previous word...')
const btnTxt = computed(() => props.gameMode === 'INPUT' ? 'Add' : 'Guess')

const onHandleSubmit = () => {
    emit('handleSubmit', word.value)
    word.value = ''
}

</script>
