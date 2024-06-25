<template>
    <div class="flex -space-x-4 rtl:space-x-reverse">
        <NuxtImg
            v-for="avatar in avatars"
            class="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
            :src="avatar"
            alt="" />
    </div>
</template>
<script lang="ts" setup>
const props = defineProps({
    TurnOrderByIds: Array,
})

const store = useStore()
const { game } = storeToRefs(store)
// const avatars = computed(() =>
//     store.game.players.map((p) => ({ avatar: p.avatar, name: p.userName })),
// )
const avatars = computed(() => {
    if (!store.game) return
    return props.TurnOrderByIds.map(
        (id) => store.game.players.find((p) => p.id === id)?.avatar,
    )
})
</script>
