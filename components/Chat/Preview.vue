<template>
    <li>
        <NuxtLink :to="localPath(`/game/${game.id}`)">
            <div
                class="grid grid-cols-[minmax(min-content,1fr)_min-content] gap-1 min-h-32 max-h-fit rounded bg-accent-3/80 md:max-w-56 p-2 cursor-pointer hover:bg-accent-3/50 duration-300">
                <h2 class="text-2xl">{{ game.title }}</h2>
                <h6 class="text-sm lowercase self-start">
                    {{ game.GameMode }}
                </h6>
                <h4
                    v-if="game._count.messages"
                    class="col-span-full text-content/75">
                    {{ game._count.messages }} Messages
                </h4>
                <h4
                    v-if="game.updatedAt"
                    class="col-span-full text-content/75 text-sm">
                    {{ relativeTime(game.updatedAt) }}
                </h4>
                <ul class="col-span-full flex gap-2 flex-wrap self-end">
                    <li
                        v-for="p in game.Users"
                        class="bg-accent-2/30 px-2 rounded-full flex-center max-h-6">
                        {{
                            p.user.email === userEmail ? 'You' : p.user.userName
                        }}
                    </li>
                </ul>
            </div>
        </NuxtLink>
    </li>
</template>

<script lang="ts" setup>
import type { Game } from '@/types/game'
import { relativeTime } from '@/services/dateTime'

const { game, userEmail } = defineProps({
    game: {
        type: Object as PropType<Game>,
        required: true,
    },
    userEmail: {
        type: String,
        required: true,
    },
})

const localPath = useLocalePath()
</script>
