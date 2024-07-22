<template>
    <div
        class="fixed inset-0 z-40 h-dvh w-dvw bg-bkg_dark/10"
        @contextmenu.prevent="emitAction('closeContextMenu', 'closeContextMenu')"
        @click="emitAction('closeContextMenu', 'closeContextMenu')">
        <div
            class="context-menu absolute z-50 h-fit min-w-36 border border-bkg_dark/50 bg-bkg"
            :style="{ top: y + 'px', left: x + 'px' }">
            <div
                v-for="action in actions"
                :key="action.action"
                class="cursor-pointer p-2 hover:bg-accent-3/30"
                @click="emitAction(action.action)">
                <span v-if="action.icon">{{ action.icon }}</span>
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
<!-- source: https://medium.com/@sj.anyway/custom-right-click-context-menu-in-vue3-b323a3913684 -->

<style scoped>
.context-menu {
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}
</style>
