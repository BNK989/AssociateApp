<template>
    <li class="flex items-center ms-2 gap-1" :id="'w-' + w.id">
        <SvgCheckMark v-if="w.isResolved" />
        <NuxtImg
            :src="w.user?.avatar"
            class="size-8 rounded-full me-1"
            alt="Rounded avatar" />
        <div
            @contextmenu.prevent="showContextMenu($event, w.id)"
            class="px-3 pt-1 pb-2 bg-blue-300 bg-opacity-10 w-min whitespace-nowrap select-none">
            <div class="flex items-center gap-2">
                <!-- IF NOT LAST -->
                <p v-if="!isLast" class="whitespace-nowrap">
                    {{ w.isResolved ? w.content : w.cipher }}
                </p>
                <!-- IF LAST -->
                <p v-else>
                    {{ isMyTurn || isSolve ? w.content : w.cipher }}
                </p>
                <!-- <span
                    v-if="!w.isResolved && !isLast"
                    @click="getHint(w.id)"
                    class="cursor-help"
                    title="get hint">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="size-5 opacity-75">
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M16.712 4.33a9.027 9.027 0 0 1 1.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 0 0-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.014 9.014 0 0 1 0 9.424m-4.138-5.976a3.736 3.736 0 0 0-.88-1.388 3.737 3.737 0 0 0-1.388-.88m2.268 2.268a3.765 3.765 0 0 1 0 2.528m-2.268-4.796a3.765 3.765 0 0 0-2.528 0m4.796 4.796c-.181.506-.475.982-.88 1.388a3.736 3.736 0 0 1-1.388.88m2.268-2.268 4.138 3.448m0 0a9.027 9.027 0 0 1-1.306 1.652c-.51.51-1.064.944-1.652 1.306m0 0-3.448-4.138m3.448 4.138a9.014 9.014 0 0 1-9.424 0m5.976-4.138a3.765 3.765 0 0 1-2.528 0m0 0a3.736 3.736 0 0 1-1.388-.88 3.737 3.737 0 0 1-.88-1.388m2.268 2.268L7.288 19.67m0 0a9.024 9.024 0 0 1-1.652-1.306 9.027 9.027 0 0 1-1.306-1.652m0 0 4.138-3.448M4.33 16.712a9.014 9.014 0 0 1 0-9.424m4.138 5.976a3.765 3.765 0 0 1 0-2.528m0 0c.181-.506.475-.982.88-1.388a3.736 3.736 0 0 1 1.388-.88m-2.268 2.268L4.33 7.288m6.406 1.18L7.288 4.33m0 0a9.024 9.024 0 0 0-1.652 1.306A9.025 9.025 0 0 0 4.33 7.288" />
                    </svg>
                </span> -->
            </div>
            <small>{{ isMe ? $t('You') : w.user?.userName }}</small>
        </div>
        <div v-if="isArrow" id="lastGuess">
            <SvgArrowRight class="rotate-180 animate-pulse" />
        </div>
        <Transition>
            <MiniContextMenu
                v-if="showMenu"
                :actions="contextMenuActions"
                @action-clicked="handleActionClick"
                :x="menuX"
                :y="menuY" />
        </Transition>
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

const store = useStore()

// **** CONTEXT MENU ****
const showMenu = ref(false)
const menuX = ref(0)
const menuY = ref(0)
const targetRow = ref({})
const contextMenuActions = computed(() => {
    if (props.w.isResolved) {
        return [{ label: 'Delete', action: 'delete' }]
    } else {
        return [
            // { label: 'Delete', action: 'delete' },

            {
                label: 'Request a hint',
                action: 'getHint',
                icon: '💡',
            },
        ]
    }
})

const showContextMenu = (event, item) => {
    if (props.w.isResolved) return
    showMenu.value = true
    targetRow.value = item
    menuX.value = event.layerX
    menuY.value = event.layerY
}
const closeContextMenu = () => {
    showMenu.value = false
}

async function handleActionClick(action: string): Promise<void> {
    let res
    if (action === 'closeContextMenu') {
        closeContextMenu()
    } else {
        getHint(targetRow.value)
    }
}
// **** CONTEXT MENU END ****

const getHint = async (wordId) => {
    const hint = await $fetch(`/api/ai/hint?msg_id=${wordId}`)
    store.setToast({ msg: hint, type: 'info', duration: 10000 })
}
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
