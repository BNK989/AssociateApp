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
                            <span class="text-content"
                                >Total Words Guessed:</span
                            >
                            <span>88.4k</span>
                        </h5>
                    </div>
                </div>
                <div class="overflow-x-auto">
                    <table class="w-full text-sm text-left">
                        <thead class="text-xs text-content uppercase bg-bkg">
                            <tr>
                                <th scope="col" class="px-4 py-3">Player</th>
                                <th scope="col" class="px-4 py-3">Stock</th>
                                <th scope="col" class="px-4 py-3">Location</th>
                                <th scope="col" class="px-4 py-3">
                                    Guess Rate
                                </th>
                                <th scope="col" class="px-4 py-3">Rating</th>
                                <th scope="col" class="px-4 py-3">Sales</th>
                                <th scope="col" class="px-4 py-3">
                                    Last Active
                                </th>
                                <th scope="col" class="px-4 py-3">
                                    Last Update
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                v-for="item in 10"
                                @contextmenu.prevent="
                                    showContextMenu($event, item)
                                "
                                class="border-b border-bkg_dark/50 hover:bg-bkg_dark/80 odd:bg-bkg_dark/20">
                                <th
                                    scope="row"
                                    class="flex items-center px-4 py-2 font-medium whitespace-nowrap">
                                    <img
                                        src="https://flowbite.s3.amazonaws.com/blocks/application-ui/products/imac-front-image.png"
                                        alt="iMac Front Image"
                                        class="w-auto h-8 mr-3" />
                                    Apple iMac 27&#34;
                                </th>
                                <td class="px-4 py-2">
                                    <span
                                        class="bg-primary-100 text-xs font-medium px-2 py-0.5 rounded"
                                        >Desktop PC</span
                                    >
                                </td>
                                <td
                                    class="px-4 py-2 font-medium whitespace-nowrap">
                                    <div class="flex items-center">
                                        <div
                                            class="inline-block w-4 h-4 mr-2 bg-red-700 rounded-full"></div>
                                        95
                                    </div>
                                </td>

                                <td
                                    class="px-4 py-2 font-medium whitespace-nowrap">
                                    0.47
                                </td>
                                <td
                                    class="px-4 py-2 font-medium whitespace-nowrap">
                                    <div class="flex items-center">
                                        <svg
                                            v-for="i in 5"
                                            aria-hidden="true"
                                            class="w-5 h-5 text-yellow-400"
                                            fill="currentColor"
                                            viewbox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        <span class="ml-1">5.0</span>
                                    </div>
                                </td>
                                <td
                                    class="px-4 py-2 font-medium whitespace-nowrap">
                                    <div class="flex items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewbox="0 0 24 24"
                                            fill="currentColor"
                                            class="w-5 h-5 mr-2 text-content/20"
                                            aria-hidden="true">
                                            <path
                                                d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                                        </svg>
                                        1.6M
                                    </div>
                                </td>
                                <td class="px-4 py-2">$3.2M</td>
                                <td
                                    class="px-4 py-2 font-medium whitespace-nowrap">
                                    Just now
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
