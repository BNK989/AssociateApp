<template>
  <div class="m-3">
    <h2 class="text-3xl font-semibold">Preferences</h2>
        <form action="#" class="grid md:grid-cols-2 grid-rows-4 gap-x-20 gap-y-10 max-w-5xl mx-auto mt-4">
            <div class="flex justify-between items-center">
                <label for="dark-mode">Language</label>
                <select
                    class="bg-bkg_dark/80 h-6 ms-2 me-4 min-w-24 focus-visible:outline focus-visible:outline-bkg_dark">
                    <option value="en-US">English</option>
                    <option value="es-ES">Spanish</option>
                    <option value="he-IL">Hebrew</option>
                    <option value="">Use system settings</option>
                </select>
            </div>
            <div class="flex justify-between items-center">
                <label for="dark-mode">Set Dark mode</label>
                <select
                    class="bg-bkg_dark/80 h-6 ms-2 me-4 min-w-24 focus-visible:outline focus-visible:outline-bkg_dark">
                    <option value="dark">Dark</option>
                    <option value="light">Light</option>
                    <option value="">Use system settings</option>
                </select>
            </div>
            <div class="flex justify-between">
              <label class="inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" class="sr-only peer" />
                    <div
                        class="relative w-11 h-6 bg-bkg_dark/80 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-accent-3/50 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-content after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-content after:border-bkg_dark/50 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent-3/50"></div>
                    <span
                        class="ms-3 text-sm font-medium"
                        >Play in game audio</span
                    >
                </label>
            </div>
            <div class="flex justify-between">
                <label class="inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" class="sr-only peer" />
                    <div
                        class="relative w-11 h-6 bg-bkg_dark/80 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-accent-3/50 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-content after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-content after:border-bkg_dark/50 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent-3/50"></div>
                    <span
                        class="ms-3 text-sm font-medium"
                        >Get Notifications</span
                    >
                </label>
            </div>
            <div class="flex justify-between gap-4">
                <label for="userName">Update User name</label>
                <input
                    class="bg-bkg_dark/20 flex-1"
                    type="text"
                    name="newUserName"
                    id="newUserName" />
            </div>
            <div class="flex justify-between">
                <label for="newAvatar">Update Image</label>
                <input
                    class="hidden"
                    type="file"
                    name="newAvatar"
                    id="newAvatar" />
            </div>

            <button
                class="col-span-full border border-content py-2"
                type="submit">
                Submit
            </button>
        </form>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'scrollable',
})
</script>
