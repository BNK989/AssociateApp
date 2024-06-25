<template>
    <TransitionGroup
        name="list"
        tag="div"
        class="relative flex -space-x-4 rtl:space-x-reverse">
        <UserAvatar
            v-for="avatar in avatars"
            :user="avatar"
            :class="
                avatar.id === store.user?.id ? `border-2 border-accent-3` : ''
            " />
    </TransitionGroup>
</template>
<script lang="ts" setup>
const props = defineProps({
    TurnOrderByIds: Array,
})

const store = useStore()
const { game } = storeToRefs(store)

const avatars = computed(() => {
    if (!store.game) return
    return props.TurnOrderByIds.map((id) => {
        const p = store.game.players.find((p) => p.id === id)
        return { avatar: p.avatar, name: p.userName, id: p.id }
    })
})
</script>

<style scoped>
.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
    transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateY(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
    position: absolute;
}
</style>
