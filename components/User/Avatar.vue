<template>
    <NuxtImg
        v-if="user?.avatar"
        :class="`w-10 h-10 rounded-full ${errLoadingImg ? 'hidden' : ''} ${
            props.class ? props.class : ''
        }`"
        :src="user?.avatar"
        :alt="user.userName"
        @error="handleErr" />
    <span v-if="errLoadingImg" class="rounded-full text-bkg_dark/30">
        <svg height="40" width="40" xmlns="http://www.w3.org/2000/svg">
            <circle
                cx="20"
                cy="20"
                r="18"
                fill="currentColor"
                stroke="currentColor" />
            <text
                x="20"
                y="20"
                fill="white"
                :font-size="initials.length * 0.3 + 'em'"
                text-anchor="middle"
                dominant-baseline="middle"
                dy="0.1em">
                {{ initials }}
            </text>
        </svg>
    </span>
</template>

<script lang="ts" setup>
import type { MiniUser } from '@/types/user'
const props = defineProps({
    user: {
        type: Object as PropType<MiniUser>,
        required: true,
    },
    class: {
        type: String,
        required: false,
    },
})
const errLoadingImg = ref(false)

const handleErr = () => {
    errLoadingImg.value = true
}

const initials = computed(() => {
    return getInitials(props.user?.userName)
})

const getInitials = (name: string) => {
    const words = name.split(' ')
    const initials = words
        .map((word) => word[0])
        .slice(0, 3)
        .join('')
    return initials.toUpperCase()
}
</script>
