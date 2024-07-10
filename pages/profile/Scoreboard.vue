<template>
    <section class="sm:py-3">
        <div class="mx-auto max-w-screen-2xl lg:px-12">
            <div class="relative overflow-hidden shadow-md sm:rounded-lg">
                <div
                    class="flex flex-col px-4 py-3 space-y-3 lg:flex-row lg:items-center lg:justify-between lg:space-y-0 lg:space-x-4">
                    <h2 class="text-xl font-semibold">Scoreboard</h2>
                    <div class="flex items-center flex-1 space-x-4">
                        <h5>
                            <span class="text-content">All Games:</span>
                            <span>123456</span>
                        </h5>
                        <h5>
                            <span class="text-content">Total Words Guessed:</span>
                            <span>88.4k</span>
                        </h5>
                    </div>
                </div>
                <div class="overflow-x-auto">
                    <table class="w-full text-sm text-left">
                        <thead class="text-xs text-content uppercase bg-bkg">
                            <tr>
                                <th scope="col" class="px-4 py-3">Player</th>
                                <th scope="col" class="px-4 py-3">Score</th>
                                <th scope="col" class="px-4 py-3">Games</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                v-for="item in 10"
                                @contextmenu.prevent="showContextMenu($event, item)"
                                class="border-b border-bkg_dark/50 hover:bg-bkg_dark/80 odd:bg-bkg_dark/20">
                                <th
                                    scope="row"
                                    class="flex items-center px-4 py-2 font-medium whitespace-nowrap">
                                    <img
                                        src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png"
                                        alt="iMac Front Image"
                                        class="w-auto h-8 mr-3" />
                                    USER_NAME;
                                </th>
                                <td class="px-4 py-2">
                                    <span
                                        class="bg-primary-100 text-xs font-medium px-2 py-0.5 rounded"
                                        >USER_SCORE</span
                                    >
                                </td>
                                <td class="px-4 py-2">
                                    <span
                                        class="bg-primary-100 text-xs font-medium px-2 py-0.5 rounded"
                                        >USER_GAMES</span
                                    >
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </section>
    <MiniContextMenu
        v-if="showMenu"
        :actions="contextMenuActions"
        @action-clicked="handleActionClick"
        :x="menuX"
        :y="menuY" />
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'scrollable',
})
const showMenu = ref(false)
const menuX = ref(0)
const menuY = ref(0)
const targetRow = ref({})
const contextMenuActions = ref([
    { label: 'Edit', action: 'edit' },
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

function handleActionClick(action) {
    if (action === 'closeContextMenu') closeContextMenu()
    console.log(action, targetRow.value)
}
</script>
