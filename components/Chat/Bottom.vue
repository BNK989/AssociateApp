<template>
    <section class="border-accent-3/40 shadow-2xl shadow-content/20 sm:shadow-none">
        <div
            v-if="showStarted"
            class="fixed inset-16 flex-center flex-col gap-3 h-min p-4 border border-accent-2/20 bg-accent-2/10 rounded">
            <h2>Stuck?</h2>
            <button class="py-2 px-4 bg-accent-2/60 rounded" @click="getRandomStartWord">
                Start with a random word
            </button>
        </div>
        <form @submit.prevent="onHandleSubmit">
            <div class="relative">
                <input
                    type="text"
                    ref="inputField"
                    :class="true ? '' : ''"
                    class="block w-full p-4 ps-4 text-sm bg-bkg md:border border-accent-3/40 rounded-t-lg focus:ring-accent-3/10 focus:border-accent-3/10 focus:outline-none"
                    :placeholder="placeholder"
                    v-model="word" />
                <button
                    type="submit"
                    :class="
                        props.gameMode === 'SOLVE'
                            ? `bg-accent-1 ${!isMyTurn ? 'bg-opacity-40' : ''}`
                            : `bg-accent-3 ${!isMyTurn ? 'bg-opacity-40' : ''}`
                    "
                    class="min-w-32 absolute end-2.5 bottom-2.5 hover:bg-accent-3/75 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">
                    {{ btnTxt }}
                </button>
            </div>
        </form>
    </section>
</template>

<script lang="ts" setup>
const props = defineProps({
    gameMode: String,
    nextPlayerId: String,
    wordLength: Number,
})
const emit = defineEmits(['handleSubmit'])
const relaxCheckEnabled = inject<Ref<boolean>>('relaxCheckEnabled')

const { t, locale } = useI18n()

const store = useStore()
const { user } = storeToRefs(store)

const { randomWord } = useUtilities()

const word = ref('')
const inputField = ref(null)

const timeout = ref(null)
const showStarted = ref(false)

watch(
    () => props.wordLength,
    (newVal) => {
        if (timeout.value) clearTimeout(timeout.value)

        if (newVal === 0) {
            showStarted.value = false
            timeout.value = setTimeout(() => {
                showStarted.value = true
            }, 5000)
        } else {
            showStarted.value = false
        }
    },
    { immediate: true },
)

// onMounted(() => {
//     let timeout
//     if (props.wordLength === 0) {
//         console.log('showStarted:', props.wordLength)
//         if (timeout) clearTimeout(timeout)
//         timeout = setTimeout(() => {
//             showStarted.value = true
//         }, 5000)
//     } else {
//         if (timeout) clearTimeout(timeout)
//         showStarted.value = false
//     }
// })
// const showStarted = computed(() => {
//     let timeout
//     if (props.wordLength === 0) {
//         console.log('showStarted:', props.wordLength)
//         if (timeout) clearTimeout(timeout)
//         timeout = setTimeout(() => {
//             return true
//         }, 5000)
//     } else {
//         if (timeout) clearTimeout(timeout)
//         return false
//     }
// })

const isMyTurn = computed(() => {
    return user.value?.id === props.nextPlayerId
})

const getRandomStartWord = () => {
    const word = randomWord()
    emit('handleSubmit', word)
    store.setToast({ msg: `you sent the word: ${word}`, type: 'success', duration: 5000 })
    showStarted.value = false
}

const placeholder = computed(() => {
    if (!isMyTurn.value && props.gameMode !== 'SOLVE') {
        return `${t('Placeholder_Not_your_turnA')} ${
            store.game?.players.find((p) => p.id === props.nextPlayerId)?.userName
        }${t('Placeholder_Not_your_turnB')}...`
    } else {
        return props.gameMode === 'INPUT'
            ? t('Game_Text_Placeholder_input')
            : t('Game_Text_Placeholder_guess')
    }
})
const btnTxt = computed(() =>
    props.gameMode === 'INPUT'
        ? t('Game_Send_Btn')
        : !relaxCheckEnabled.value
        ? t('Game_Guess_Btn')
        : t('Game_Relax_Btn'),
)

const onHandleSubmit = () => {
    store.setToast({ msg: '' })
    if (!isMyTurn.value && props.gameMode !== 'SOLVE')
        return store.setToast({
            msg: 'Not your turn',
            type: 'oops',
            duration: 2000,
        })

    if (!word.value) {
        return store.setToast({
            msg: 'Please enter a word',
            type: 'oops',
            duration: 2000,
        })
    }
    if (showStarted.value) showStarted.value = false
    emit('handleSubmit', word.value)
    word.value = ''
    nextTick(() => {
        inputField.value?.focus()
    })
}
</script>
