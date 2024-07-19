<template>
    <div class="p-2 md:p-4">
        <h1 class="text-3xl font-bold text-right ltr:text-left">
            {{ $t('Welcome') }}
        </h1>
        <!-- Logged OUT -->
        <div v-if="!storeUser">
            <NuxtLink :to="localPath('/profile/login?signup=true')">
                <button class="py-2 px-3 my-4 rounded-full w-full md:w-2/5 bg-accent-3">
                    {{ $t('Signup_to_play') }}
                </button>
            </NuxtLink>
        </div>
        <div v-else>
            <button
                v-if="storeUser"
                @click="createNewGame"
                class="py-2 px-3 my-4 rounded-full w-full md:w-2/5 bg-accent-3">
                {{ $t('Start_New_Game_Btn') }}
            </button>

            <div v-if="storeUser?.receivedInvites?.length > 0">
                <PendingInvites />
            </div>
            <h2 class="text-2xl my-2">{{ $t('Active_Games') }}</h2>
            <Transition v-if="activeGames.length > 0 || pending">
                <ul class="ChatPreview flex gap-4 flex-wrap w-full">
                    <ChatPreview
                        v-for="game in activeGames"
                        @contextmenu.prevent="
                            showContextMenu($event, game.id, game.status)
                        "
                        :key="game.id"
                        :game="game"
                        :userEmail="storeUser?.email" />
                </ul>
            </Transition>
            <ul v-else class="flex gap-4 flex-wrap w-full my-2">
                <SkeletonCard v-for="c in 4" />
            </ul>
            <!-- END OF ACTIVE GAME -->
            <div v-if="isNonActiveGames.length > 0">
                <button
                    v-if="!showNonActiveGames"
                    class="py-2 px-6 my-4 rounded-full w-full md:w-fit border border-accent-3 text-content/80"
                    @click.once="showNonActiveGames = 'FINISHED'">
                    Show Non Active Games
                </button>

                <div
                    v-if="showNonActiveGames"
                    class="my-4 text-sm font-medium text-center text-content/75 border-b border-content/50">
                    <ul class="flex flex-wrap -mb-px border-b-2 border-accent-3/60">
                        <li v-for="c in nonActiveGamesCategory" :key="c" class="me-2">
                            <button
                                @click="showNonActiveGames = c.toUpperCase()"
                                class="inline-block capitalize p-4 border-accent-3/90 rounded-t-lg"
                                :class="
                                    showNonActiveGames === c.toUpperCase()
                                        ? 'border-b-2 bg-bkg_dark'
                                        : ''
                                ">
                                {{ c }}
                            </button>
                        </li>
                    </ul>
                    <div v-if="showNonActiveGames">
                        <ul class="grid gap-4 my-4 grid-cols-2 md:grid-cols-4">
                            <ChatPreview
                                v-for="game in nonActiveGames"
                                @contextmenu.prevent="
                                    showContextMenu($event, game.id, game.status)
                                "
                                :key="game.id"
                                :game="game"
                                :userEmail="storeUser?.email" />
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <!-- END OF NON ACTIVE GAMES -->
        <div class="my-4">
            <MiniShare />
        </div>
    </div>

    <MiniContextMenu
        v-if="showMenu"
        :actions="contextMenuActions"
        @action-clicked="handleActionClick"
        :x="menuX"
        :y="menuY" />
</template>

<script lang="ts" setup>
import type { SkeletonCard } from '#build/components'
import type { Game } from '~/types/game'
import PendingInvites from '~/components/Invites/PendingInvites.vue'
import gsap from 'gsap'

definePageMeta({
    layout: 'scrollable',
})

const store = useStore()
const { user: storeUser } = storeToRefs(store)

const localPath = useLocalePath()
const router = useRouter()

const { generateName } = useUtilities()

const {
    data: allGames,
    pending,
    refresh,
    clear,
} = await useFetch<Game[]>('/api/all-games', {
    query: {
        user_id: storeUser.value?.id,
    },
    lazy: true,
    server: false,
    onResponseError({ response }) {
        console.error('there fetching allGames', response)
    },
    // onResponse() {
    //     nextTick(() => {
    //         gsap.from('ul.ChatPreview > li', {
    //             scale: 0,
    //             duration: 0.6,
    //             stagger: 0.15,
    //         })
    //     })
    // },
})

const showNonActiveGames = ref('')
const nonActiveGames = ref([])
const nonActiveGamesCategory = ref(['finished', 'archived', 'deleted'])

const activeGames = computed(
    () => allGames.value?.filter((g) => g.status === 'ACTIVE') || [],
)
const isNonActiveGames = computed(
    () => allGames.value?.filter((g) => g.status !== 'ACTIVE') || [],
)

watch(
    () => showNonActiveGames.value,
    () => {
        nonActiveGames.value = allGames.value?.filter(
            (g) => g.status === showNonActiveGames.value,
        )
    },
)
watch(
    () => storeUser.value?.id,
    () => {
        storeUser.value ? refresh() : clear()
    },
)

const createNewGame = async () => {
    if (!storeUser.value?.id)
        return store.setToast({ msg: 'Please login first', type: 'warn' })
    // const title = prompt('Enter game title', generateName())
    const title = generateName()
    if (!title) return

    try {
        const newGame = await $fetch('/api/create-game', {
            method: 'POST',
            body: {
                title,
                user_id: storeUser.value?.id,
            },
        })
        if (!newGame) throw new Error('game not created')
        router.push(`/game/${newGame.id}#newGame`)
    } catch (err) {
        console.error('there was an error', err)
    }
}

// **** CONTEXT MENU ****
const showMenu = ref(false)
const menuX = ref(0)
const menuY = ref(0)
const targetRow = ref({})
const gameState = ref('')
const contextMenuActions = computed(() => {
    // ACTIVE  ARCHIVED  DELETED  FINISHED
    const menuOptions = [
        { label: 'Archive', action: 'archive' },
        { label: 'Delete', action: 'delete' },
    ]
    if (gameState.value === 'ACTIVE') {
        return menuOptions
    } else if (gameState.value === 'ARCHIVED') {
        return [{ label: 'Delete', action: 'delete' }]
    } else if (gameState.value === 'DELETED') {
        return [{ label: 'Delete Forever', action: 'deleteForever' }]
    }

    return menuOptions
})

const showContextMenu = (event, item, currState) => {
    showMenu.value = true
    targetRow.value = item
    gameState.value = currState
    menuX.value = event.clientX
    menuY.value = event.clientY
}
const closeContextMenu = () => {
    showMenu.value = false
}

async function handleActionClick(action: string): Promise<void> {
    let res
    if (action === 'closeContextMenu') {
        closeContextMenu()
    } else if (action === 'delete' || action === 'archive') {
        res = await $fetch(`/api/${targetRow.value}/toggle-status`, {
            method: 'PUT',
            body: {
                status: action.toUpperCase() + 'D',
                senderId: storeUser.value.id,
            },
        })
        if (res?.ok) {
            refresh()
            store.setToast({
                msg: `Game has been successfully ${action}.`,
                type: 'success',
            })
        } else {
            store.setToast({
                msg: `Failed to ${action} game.`,
                type: 'error',
            })
        }
    } else if (action === 'deleteForever') {
        res = await $fetch(`/api/${targetRow.value}/delete-game`, {
            method: 'DELETE',
        })
        if (res.succuss) {
            refresh()
            store.setToast({
                msg: `Game has been successfully deleted.`,
                type: 'success',
            })
        } else {
            store.setToast({
                msg: `Failed to delete game.`,
                type: 'error',
            })
        }
    }
}
// **** CONTEXT MENU END ****
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}

ul.ChatPreview > li {
    opacity: 1;
    transition: all 1s ease;

    @starting-style {
        scale: 0;
        opacity: 0;
        transform-origin: 'left';
    }
}
</style>
