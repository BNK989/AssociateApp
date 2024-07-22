<template>
    <li
        class="min-w-[50%] flex-1 rounded md:min-w-56"
        :class="game.GameMode === 'SOLVE' ? 'bg-accent-2/40' : 'bg-accent-3/60'">
        <NuxtLink :to="localPath(`/game/${game.id}`)">
            <div
                class="grid max-h-fit min-h-36 cursor-pointer grid-cols-[minmax(min-content,1fr)_min-content] gap-1 rounded p-2 duration-300 hover:bg-accent-3/50">
                <!-- <h2 class="text-2xl">{{ game.title }}</h2> -->
                <h4 v-if="game._count.messages" class="whitespace-nowrap text-xl text-content">
                    {{ game._count.messages }} Messages
                </h4>
                <h6 class="self-start text-sm lowercase">
                    {{ game.GameMode }}
                </h6>
                <h4 v-if="game.updatedAt" class="col-span-full text-sm text-content/75">
                    {{ relativeTime(game.updatedAt) }}
                </h4>
                <ul class="col-span-full flex flex-wrap gap-2 self-end">
                    <li
                        v-for="p in game.Users"
                        class="flex-center max-h-6 rounded-full bg-accent-2/30 px-2">
                        {{ p.user.email === userEmail ? 'You' : p.user.userName }}
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
