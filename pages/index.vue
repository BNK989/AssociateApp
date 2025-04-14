<template>
    <div class="p-2 md:p-4">
        <!-- <h1 class="text-right text-3xl font-bold ltr:text-left">
            {{ $t('Welcome') }}
        </h1> -->
        <!-- Logged OUT -->
        <div
            v-if="!storeUser"
            class="flex flex-wrap items-center justify-center gap-2 md:justify-start">
            <NuxtLink :to="localPath('/profile/login?signup=true')">
                <button class="my-2 text-nowrap rounded-full bg-accent-3 px-12 py-2">
                    {{ $t('Signup_to_play') }}
                </button>
            </NuxtLink>
            <button
                @click="createNewTempGame"
                class="my-2 text-nowrap rounded-full border-2 border-accent-3 px-12 py-2">
                Start a test game
            </button>
        </div>
        <div v-else>
            <button
                v-if="storeUser"
                @click="createNewGame"
                class="my-4 w-full rounded-full bg-accent-3 px-3 py-2 md:w-2/5">
                {{ $t('Start_New_Game_Btn') }}
            </button>

            <div v-if="storeUser?.receivedInvites?.length > 0">
                <PendingInvites :invites="formattedInvites" />
            </div>
            <h2 class="my-2 text-2xl">{{ $t('Active_Games') }}</h2>
            <Transition v-if="activeGames.length > 0 || pending">
                <ul class="ChatPreview flex gap-4 overflow-x-auto rounded md:gap-8">
                    <ChatPreview
                        v-for="game in activeGames"
                        @contextmenu.prevent="showContextMenu($event, game.id, game.status)"
                        :key="game.id"
                        :game="game"
                        :userEmail="storeUser?.email" />
                </ul>
            </Transition>
            <ul v-else class="my-2 flex w-full flex-wrap gap-4">
                <SkeletonCard v-for="c in 4" />
            </ul>
            <!-- END OF ACTIVE GAME -->
            <div v-if="isNonActiveGames.length > 0">
                <button
                    v-if="!showNonActiveGames"
                    class="my-4 w-full rounded-full border border-accent-3 px-6 py-2 text-content/80 md:w-fit"
                    @click.once="showNonActiveGames = 'FINISHED'">
                    Show Non Active Games
                </button>

                <div
                    v-if="showNonActiveGames"
                    class="my-4 border-b border-content/50 text-center text-sm font-medium text-content/75">
                    <ul class="-mb-px flex flex-wrap border-b-2 border-accent-3/60">
                        <li v-for="c in nonActiveGamesCategory" :key="c" class="me-2">
                            <button
                                @click="showNonActiveGames = c.toUpperCase()"
                                class="inline-block rounded-t-lg border-accent-3/90 p-4 capitalize"
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
                        <ul class="my-4 grid grid-cols-2 gap-4 md:grid-cols-4">
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
import type { Game } from '~/types/game'
import PendingInvites from '~/components/Invites/PendingInvites.vue'
import type { User } from '~/types/user'

definePageMeta({
    layout: 'scrollable',
})

const store = useStore()
const { user: storeUser } = storeToRefs(store)

// Transform receivedInvites to match the Invite type
const formattedInvites = computed(() =>
    (storeUser.value?.receivedInvites || []).map((invite) => ({
        id: Number(invite.id),
        status: invite.status || 'PENDING',
        createdAt: invite.createdAt,
        inviter: {
            userName: invite.userName,
            avatar: invite.avatar,
            inviter: invite.inviter,
            status: invite.status || 'PENDING',
            createdAt: invite.createdAt,
        },
    })),
)

// Ensure receivedInvites is always an array
watchEffect(() => {
    if (storeUser.value && !Array.isArray(storeUser.value.receivedInvites)) {
        storeUser.value.receivedInvites = []
    }
})

const localPath = useLocalePath()
const router = useRouter()

const showNonActiveGames = ref('')
const nonActiveGames = ref([])
const nonActiveGamesCategory = ref(['finished', 'archived', 'deleted'])
const pending = ref(false)
// const allGames = ref([])

const { generateName } = useUtilities()

// TODO: close this into a function, and call
// that function from watch when user changes
const { data: allGamesResponse, refresh } = useFetch<{ data: Game[] }>('/api/all-games', {
    query: computed(() => ({
        user_id: storeUser.value?.id,
    })),
    default: () => ({ data: [] }),
    lazy: true,
    server: false,
    immediate: false,
    onResponseError({ response }) {
        console.error('Error fetching allGames:', response)
    },
})

const allGames = computed(() => allGamesResponse.value?.data || [])

// Single watcher for user changes
watch(
    () => storeUser.value?.id,
    (newId) => {
        if (newId && typeof storeUser.value === 'object') {
            refresh()
        } else {
            allGamesResponse.value = null
        }
    },
    { immediate: true },
)

const activeGames = computed(() => allGames.value.filter((g) => g.status === 'ACTIVE'))
const isNonActiveGames = computed(() => allGames.value.filter((g) => g.status !== 'ACTIVE'))

watch(
    () => showNonActiveGames.value,
    () => {
        nonActiveGames.value = allGames.value.filter(
            (g) => g.status === showNonActiveGames.value,
        )
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

const createNewTempGame = async () => {
    if (storeUser.value?.id)
        return store.setToast({ msg: 'You are logged in already', type: 'warn' })
    const title = generateName()
    if (!title) return

    try {
        const newGame = await $fetch('/api/create-game', {
            method: 'POST',
            body: {
                title,
            },
        })
        if (!newGame) throw new Error('game not created')
        //TODO: load temp user

        router.push(`/game/${newGame.id}?temp=true&email=${newGame.tempEmail}#newGame`)
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
