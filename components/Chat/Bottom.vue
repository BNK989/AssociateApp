<template>
    <section
        class="border-accent-3/40 min-h-8 shadow-2xl shadow-white sm:shadow-none mb-2">
        <form @submit.prevent="onHandleSubmit">
            <div class="relative">
                <input
                    type="text"
                    ref="inputField"
                    :class="true ? '' : ''"
                    class="block w-full p-4 ps-4 text-sm bg-bkg md:border border-accent-3/40 rounded-lg focus:ring-accent-3/10 focus:border-accent-3/10 focus:outline-none"
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
const { t, locale } = useI18n()
const props = defineProps({
    gameMode: String,
    nextPlayerId: String,
})
const store = useStore()
const { user } = storeToRefs(store)
const word = ref('')
const inputField = ref(null)
const emit = defineEmits(['handleSubmit'])

const isMyTurn = computed(() => {
    return user.value?.id === props.nextPlayerId
})

const placeholder = computed(() => {
    if (!isMyTurn.value && props.gameMode !== 'SOLVE') {
        return `${t('Placeholder_Not_your_turnA')} ${
            store.game?.players.find((p) => p.id === props.nextPlayerId)
                ?.userName
        }${t('Placeholder_Not_your_turnB')}...`
    } else {
        return props.gameMode === 'INPUT'
            ? t('Game_Text_Placeholder_input')
            : t('Game_Text_Placeholder_guess')
    }
})
const btnTxt = computed(() =>
    props.gameMode === 'INPUT' ? t('Game_Send_Btn') : t('Game_Guess_Btn'),
)

const onHandleSubmit = () => {
    store.setToast({ msg: '' })
    if (!isMyTurn.value && props.gameMode !== 'SOLVE')
        return store.setToast({
            msg: 'Not your turn',
            type: 'oops',
            duration: 2000,
        })
    emit('handleSubmit', word.value)
    word.value = ''
    nextTick(() => {
        inputField.value?.focus()
    })
}
</script>
