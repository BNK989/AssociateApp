<template>
    <section class="sm:py-3">
        <div class="mx-auto max-w-screen-2xl lg:px-12">
            <div class="relative overflow-hidden shadow-md sm:rounded-lg">
                <div
                    class="flex flex-col space-y-3 px-4 py-3 lg:flex-row lg:items-center lg:justify-between lg:space-x-4 lg:space-y-0">
                    <h2 class="text-xl font-semibold">Scoreboard</h2>
                    <div class="flex flex-1 items-center space-x-4">
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
                    <table class="w-full text-left text-sm">
                        <thead class="bg-bkg text-xs uppercase text-content">
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
                                class="border-b border-bkg_dark/50 odd:bg-bkg_dark/20 hover:bg-bkg_dark/80">
                                <th
                                    scope="row"
                                    class="flex items-center whitespace-nowrap px-4 py-2 font-medium">
                                    <img
                                        src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png"
                                        alt="iMac Front Image"
                                        class="mr-3 h-8 w-auto" />
                                    USER_NAME;
                                </th>
                                <td class="px-4 py-2">
                                    <span
                                        class="bg-primary-100 rounded px-2 py-0.5 text-xs font-medium"
                                        >USER_SCORE</span
                                    >
                                </td>
                                <td class="px-4 py-2">
                                    <span
                                        class="bg-primary-100 rounded px-2 py-0.5 text-xs font-medium"
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
