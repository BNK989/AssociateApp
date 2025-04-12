<template>
    <li class="ms-2 flex items-center gap-1" :id="'w-' + w.id">
        <SvgCheckMark v-if="w.isResolved" />
        <NuxtImg :src="w.user?.avatar" class="me-1 size-8 rounded-full" alt="Rounded avatar" />
        <!-- @contextmenu.prevent="showContextMenu($event, w.id)" -->
        <div
            ref="msgRef"
            @click="flashEffect"
            class="w-min select-none whitespace-nowrap bg-accent-3/10 px-3 pb-2 pt-1 duration-700">
            <div class="flex items-center gap-2">
                <MiniEncrypter :t="stringToShow" />
            </div>
            <small>{{ isMe ? $t('You') : w.user?.userName }}</small>
        </div>
        <div v-if="isArrow" id="lastGuess">
            <SvgArrowRight class="rotate-180 animate-pulse" />
        </div>
        <!-- <Transition>
            <MiniContextMenu
                v-if="showMenu"
                :actions="contextMenuActions"
                @action-clicked="handleActionClick"
                :x="menuX"
                :y="menuY" />
        </Transition> -->
    </li>
</template>

<script lang="ts" setup>
import type { Word } from '@/types/word'
const props = defineProps({
    w: {
        type: Object as PropType<Word>,
        required: true,
    },
    i: {
        type: Number,
        required: true,
    },
    isLast: {
        type: Boolean,
        required: true,
    },
    isMyTurn: {
        type: Boolean,
        required: true,
    },
    isMe: {
        type: Boolean,
        required: true,
    },
    isSolve: {
        type: Boolean,
        required: true,
    },
    isArrow: {
        type: Boolean,
        required: true,
    },
})
const msgRef = ref<HTMLDivElement | null>(null)
const shouldFlash = ref(false)

function flashEffect() {
    if (!msgRef.value) return
    msgRef.value.classList.replace('bg-accent-3/10', 'bg-accent-3/45')
    setTimeout(() => {
        if (msgRef.value) {
            msgRef.value.classList.replace('bg-accent-3/45', 'bg-accent-3/10')
        }
    }, 1000)
}

const stringToShow = computed(() => {
    let text: string
    if (!props.isLast) {
        text = props.w.isResolved ? props.w.content : props.w.cipher
    } else {
        text = props.isMyTurn || props.isSolve ? props.w.content : props.w.cipher
    }
    
    // Set shouldFlash if text doesn't include '::'
    if (!text.includes('::')) {
        shouldFlash.value = true
    }
    return text
})

// Watch shouldFlash and trigger flash effect when component is mounted
watch(shouldFlash, (newVal) => {
    if (newVal && msgRef.value) {
        flashEffect()
        shouldFlash.value = false
    }
})

const store = useStore()

// **** CONTEXT MENU ****
// const showMenu = ref(false)
// const menuX = ref(0)
// const menuY = ref(0)
// const targetRow = ref({})
// const contextMenuActions = computed(() => {
//     if (props.w.isResolved) {
//         return [{ label: 'Delete', action: 'delete' }]
//     } else {
//         return [
//             // { label: 'Delete', action: 'delete' },

//             {
//                 label: 'Request a hint',
//                 action: 'getHint',
//                 icon: '💡',
//             },
//             {
//                 label: 'Reveal solution (500 point)',
//                 action: 'reveal',
//                 icon: '🔒',
//             },
//         ]
//     }
// })

// const showContextMenu = (event, item) => {
//     if (props.w.isResolved) return
//     showMenu.value = true
//     targetRow.value = item
//     menuX.value = event.layerX
//     menuY.value = event.layerY
// }
// const closeContextMenu = () => {
//     showMenu.value = false
// }

// async function handleActionClick(action: string): Promise<void> {
//     let res
//     if (action === 'closeContextMenu') {
//         closeContextMenu()
//     } else if (action === 'getHint') {
//         getHint(targetRow.value)
//     } else if (action === 'reveal') {
//         reveal(targetRow.value)
//     }
// }
// **** CONTEXT MENU END ****

// const getHint = async (wordId) => {
//     const hint = await $fetch(`/api/ai/hint?msg_id=${wordId}`)
//     store.setToast({ msg: hint, type: 'info', duration: 10000 })
// }

// const reveal = async (wordId) => {
//     const res = await $fetch(`/api/message/reveal?msg_id=${wordId}`, {
//         method: 'PUT',
//     })
// }
</script>

<style>
.v-enter-active,
.v-leave-active {
    transition: opacity 0.25s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>
