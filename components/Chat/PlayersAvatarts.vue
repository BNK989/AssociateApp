<template>
    <TransitionGroup
        name="list"
        tag="ul"
        class="relative flex -space-x-4 rtl:space-x-reverse">
        <UserAvatar
            v-for="avatar in avatars"
            :user="avatar"
            :key="avatar.id"
            :class="
                avatar.id === store.user?.id ? `border-2 border-accent-3` : ''
            " />
        <pre>{{ avatars[1] }}</pre>
        <!-- <img
            class="w-10 h-10 me-2 rounded-full"
            v-for="avatar in avatars"
            :title="avatar.name"
            :key="avatar.id"
            :class="
                avatar.id === store.user?.id ? `border-2 border-accent-3` : ''
            "
            :src="avatar.avatar" /> -->
    </TransitionGroup>
</template>
<script lang="ts" setup>
import type { MiniUser } from '~/types/user'

const props = defineProps({
    TurnOrderByIds: Array,
})

const store = useStore()
const { game } = storeToRefs(store)

const avatars: ComputedRef<MiniUser[] | undefined> = computed(() => {
    if (!store.game) return
    return props.TurnOrderByIds.map((id) => {
        const p = store.game.players.find((p) => p.id === id)
        return { avatar: p?.avatar, userName: p?.userName, id: p?.id }
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
    transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
    position: absolute;
}
</style>
