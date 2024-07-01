<template>
    <div
        class="fixed z-40 inset-0 w-dvw h-dvh bg-bkg_dark/10"
        @click="emitAction('closeContextMenu', 'closeContextMenu')">
        <div
            class="absolute h-1/3 z-50 context-menu bg-bkg min-w-36 border border-bkg_dark/50"
            :style="{ top: y + 'px', left: x + 'px' }">
            <div
                v-for="action in actions"
                :key="action.action"
                class="p-2 cursor-pointer hover:bg-accent-3/30"
                @click="emitAction(action.action)">
                {{ action.label }}
            </div>
        </div>
    </div>
</template>

<script setup>
const { actions, x, y } = defineProps(['actions', 'x', 'y'])
const emit = defineEmits(['action-clicked'])

const emitAction = (action) => {
    emit('action-clicked', action)
}
</script>

<style scoped>
.context-menu {
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}
</style>
