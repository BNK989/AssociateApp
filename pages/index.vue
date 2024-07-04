<template>
    <div class="p-4">
        <h1 class="text-3xl font-bold text-right ltr:text-left">
            {{ $t('Welcome') }}
        </h1>
        <button
            v-if="storeUser"
            @click="createNewGame"
            class="py-2 px-3 my-4 rounded-full w-full md:w-2/5 bg-accent-3">
            {{ $t('Start_New_Game_Btn') }}
        </button>
        <nuxt-link v-else :to="localPath('/profile/login?signup=true')">
            <button
                class="py-2 px-3 my-4 rounded-full w-full md:w-2/5 bg-accent-3">
                {{ $t('Signup_to_play') }}
            </button>
        </nuxt-link>
        <div v-if="storeUser?.receivedInvites?.length > 0">
            <PendingInvites />
        </div>
        <h2 class="text-2xl my-2">{{ $t('Active_Games') }}</h2>

        <ul class="flex gap-4 flex-wrap w-full">
            <ChatPreview
                v-for="game in activeGames"
                @contextmenu.prevent="showContextMenu($event, game.id)"
                :key="game.id"
                :game="game"
                :userEmail="storeUser?.email" />
        </ul>
        <!-- END OF ACTIVE GAME -->
        <div v-if="archivedGames.length > 0">
            <button
                class="py-2 px-3 my-4 rounded-full w-full md:w-2/5 bg-accent-3"
                @click="
                    showNonActiveGames.archived = !showNonActiveGames.archived
                ">
                {{ showNonActiveGames.archived ? 'Hide' : 'Show' }} Archived
                games
            </button>
            <div v-if="showNonActiveGames.archived">
                <h2 class="text-2xl my-2">
                    {{ $t('Non_Active_Games') }}
                </h2>

                <ul class="grid gap-4 grid-cols-2 md:grid-cols-4">
                    <ChatPreview
                        v-for="game in archivedGames"
                        @contextmenu.prevent="showContextMenu($event, game.id)"
                        :key="game.id"
                        :game="game"
                        :userEmail="storeUser?.email" />
                </ul>
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
import PendingInvites from '~/components/Invites/PendingInvites.vue'

definePageMeta({
    layout: 'scrollable',
})
const store = useStore()
const { user: storeUser } = storeToRefs(store)

const localPath = useLocalePath()
const router = useRouter()

// **** CONTEXT MENU ****
const showMenu = ref(false)
const menuX = ref(0)
const menuY = ref(0)
const targetRow = ref({})
const contextMenuActions = ref([
    { label: 'Archive', action: 'archive' },
    { label: 'Delete', action: 'delete' },
])

const showContextMenu = (event, item) => {
    showMenu.value = true
    targetRow.value = item
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
    } else {
        res = await $fetch(`/api/${targetRow.value}/toggle-status`, {
            method: 'PUT',
            body: {
                status: action.toUpperCase() + 'D',
                senderId: storeUser.value.id,
            },
        })
        if (res?.ok) {
            getAllGames()
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
    }
}
// **** CONTEXT MENU END ****

const allGames = ref([])
//@ts-ignore
const activeGames = computed(
    () => allGames.value?.filter((g) => g.status === 'ACTIVE') || [],
)
const archivedGames = computed(
    () => allGames.value?.filter((g) => g.status === 'ARCHIVED') || [],
)
const deletedGames = computed(
    () => allGames.value?.filter((g) => g.status === 'DELETED') || [],
)
const finishedGames = computed(
    () => allGames.value?.filter((g) => g.status === 'FINISHED') || [],
)
const showNonActiveGames = ref({
    archived: false,
    deleted: false,
    finished: false,
})

onMounted(async () => {
    if (!storeUser.value) return
    getAllGames()
})
watch(() => storeUser.value?.id, getAllGames)

async function getAllGames() {
    if (!storeUser.value?.id) allGames.value = []
    else
        allGames.value = await $fetch(
            `/api/all-games?user_id=${storeUser.value?.id}`,
        )
}

const createNewGame = async () => {
    if (!storeUser.value?.id)
        return store.setToast({ msg: 'Please login first', type: 'warn' })
    const title = prompt('Enter game title', 'Untitled Game')
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
        router.push(`/game/${newGame.id}`)
    } catch (err) {
        console.error('there was an error', err)
    }
}
</script>
