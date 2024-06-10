<template>
    <section class="border border-white min-h-8">
        <form @submit.prevent="onHandleSubmit">
            <div class="relative">
                <input
                    type="text"
                    class="block w-full p-4 ps-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    :placeholder="placeholder"
                    v-model="word" />
                <button
                    type="submit"
                    class="text-white min-w-32 absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
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
const placeholder = computed(() => props.gameMode === 'input' ? 'Type the next word...' : 'Guess the previous word...')
const btnTxt = computed(() => props.gameMode === 'input' ? 'Add' : 'Guess')

const onHandleSubmit = () => {
    emit('handleSubmit', word.value)
    word.value = ''
}

</script>
