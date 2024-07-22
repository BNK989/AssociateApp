<template>
    <div class="m-3">
        <h2 class="text-3xl font-semibold">Preferences</h2>
        <form
            @submit.prevent="handleSubmit"
            class="mx-auto mt-4 grid max-w-5xl grid-rows-4 gap-x-20 gap-y-10 md:grid-cols-2">
            <div class="flex items-center justify-between">
                <label for="dark-mode">Language</label>
                <select
                    v-model="pref.language"
                    class="h-8 min-w-24 bg-bkg_dark/80 p-1 focus-visible:outline focus-visible:outline-bkg_dark">
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                    <option value="he">Hebrew</option>
                    <option value="">Use system settings</option>
                </select>
            </div>
            <div class="flex items-center justify-between">
                <label for="dark-mode">Set Dark mode</label>
                <select
                    v-model="pref.theme"
                    class="h-8 min-w-24 bg-bkg_dark/80 p-1 focus-visible:outline focus-visible:outline-bkg_dark">
                    <option value="dark">Dark</option>
                    <option value="light">Light</option>
                    <option value="">Use system settings</option>
                </select>
            </div>
            <div class="flex items-center justify-between">
                <span class="font-medium">Play in game audio</span>
                <label class="inline-flex cursor-pointer items-center">
                    <input type="checkbox" v-model="pref.soundOn" class="peer sr-only" />
                    <div
                        class="peer relative h-6 w-11 rounded-full bg-bkg_dark/80 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-bkg_dark/50 after:bg-content after:transition-all after:content-[''] peer-checked:bg-accent-3/50 peer-checked:after:translate-x-full peer-checked:after:border-content peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-accent-3/50 rtl:peer-checked:after:-translate-x-full"></div>
                </label>
            </div>
            <div class="flex items-center justify-between">
                <span class="font-medium">Get Notifications</span>
                <label class="inline-flex cursor-pointer items-center">
                    <input
                        type="checkbox"
                        v-model="pref.allowNotifications"
                        value=""
                        class="peer sr-only" />
                    <div
                        class="peer relative h-6 w-11 rounded-full bg-bkg_dark/80 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-bkg_dark/50 after:bg-content after:transition-all after:content-[''] peer-checked:bg-accent-3/50 peer-checked:after:translate-x-full peer-checked:after:border-content peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-accent-3/50 rtl:peer-checked:after:-translate-x-full"></div>
                </label>
            </div>
            <div class="flex items-center justify-between gap-4">
                <label for="userName">Update User name</label>
                <input
                    class="h-12 flex-1 bg-bkg_dark/20 px-2"
                    type="text"
                    v-model="newUserName"
                    name="newUserName"
                    id="newUserName" />
            </div>
            <div class="flex items-center justify-start gap-6">
                <NuxtImg
                    :src="newAvatar.preview || user.avatar"
                    alt=""
                    class="size-10 rounded-full" />
                <MiniUploadImage />
            </div>

            <button class="col-span-full border border-content py-2" type="submit">
                Save
            </button>
        </form>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'scrollable',
})

import { updateImage } from '@/services/updateImage'

import type { User } from '~/types/user'

const supabase = useSupabaseClient()

const store = useStore()
const { user, userPref } = storeToRefs(store)
const pref = ref({ ...userPref.value })
const newUserName = ref(user.value?.userName || '')

const newAvatar = ref({ preview: null, image: null })

const handleSubmit = async () => {
    if (!newUserName.value)
        return store.setToast({
            msg: 'User name is required',
            type: 'oops',
            duration: 2000,
        })

    const updateUser = await $fetch('/api/user/preferences/update', {
        method: 'PUT',
        body: {
            id: user.value.id,
            userName: newUserName.value,
            pref: pref.value,
        },
    })
    if (updateUser) {
        //@ts-ignore
        const dbUser: User = await $fetch(`/api/user/db-user?email=${user.value.email}`)
        store.setUser(dbUser)
        store.setToast({
            msg: 'Profile updated',
            type: 'success',
            duration: 2000,
        })
    }
}

// const uploadMedia = (event) => {
//     const input = event.target
//     if (input.files[0]) {
//         const reader = new FileReader()
//         reader.onload = (e) => {
//             newAvatar.value.preview = e.target.result
//         }
//         newAvatar.value.image = input.files[0]
//         reader.readAsDataURL(input.files[0])
//     }
// const fileName = `${info.value.make}_${info.value.model}_${Date.now()}`
// const { data, error } = await supabase
// .from('avatar')
// .upload(`public/avatar_${fileName}`, 'avatarFile(NOTINQUOATS)', {
//     cacheControl: '3600',
//     upsert: true,
// })
// }
</script>
