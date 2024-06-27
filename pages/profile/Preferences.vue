<template>
    <div class="m-3">
        <h2 class="text-3xl font-semibold">Preferences</h2>
        <form
            @submit.prevent="handleSubmit"
            class="grid md:grid-cols-2 grid-rows-4 gap-x-20 gap-y-10 max-w-5xl mx-auto mt-4">
            <div class="flex justify-between items-center">
                <label for="dark-mode">Language</label>
                <select
                    v-model="pref.language"
                    class="bg-bkg_dark/80 h-8 p-1 min-w-24 focus-visible:outline focus-visible:outline-bkg_dark">
                    <option value="en-US">English</option>
                    <option value="es-ES">Spanish</option>
                    <option value="he-IL">Hebrew</option>
                    <option value="">Use system settings</option>
                </select>
            </div>
            <div class="flex justify-between items-center">
                <label for="dark-mode">Set Dark mode</label>
                <select
                    v-model="pref.theme"
                    class="bg-bkg_dark/80 h-8 p-1 min-w-24 focus-visible:outline focus-visible:outline-bkg_dark">
                    <option value="dark">Dark</option>
                    <option value="light">Light</option>
                    <option value="">Use system settings</option>
                </select>
            </div>
            <div class="flex justify-between items-center">
                <span class="font-medium">Play in game audio</span>
                <label class="inline-flex items-center cursor-pointer">
                    <input
                        type="checkbox"
                        v-model="pref.soundOn"
                        class="sr-only peer" />
                    <div
                        class="relative w-11 h-6 bg-bkg_dark/80 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-accent-3/50 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-content after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-content after:border-bkg_dark/50 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent-3/50"></div>
                </label>
            </div>
            <div class="flex justify-between items-center">
                <span class="font-medium">Get Notifications</span>
                <label class="inline-flex items-center cursor-pointer">
                    <input
                        type="checkbox"
                        v-model="pref.allowNotifications"
                        value=""
                        class="sr-only peer" />
                    <div
                        class="relative w-11 h-6 bg-bkg_dark/80 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-accent-3/50 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-content after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-content after:border-bkg_dark/50 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent-3/50"></div>
                </label>
            </div>
            <div class="flex justify-between items-center gap-4">
                <label for="userName">Update User name</label>
                <input
                    class="bg-bkg_dark/20 flex-1 h-12 px-2"
                    type="text"
                    v-model="newUserName"
                    name="newUserName"
                    id="newUserName" />
            </div>
            <div class="flex justify-start gap-6 items-center">
                <NuxtImg
                :src="newAvatar.preview || user.avatar"
                alt=""
                class="size-10 rounded-full" />
                <ImageUpload />
            </div>

            <button
                class="col-span-full border border-content py-2"
                type="submit">
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

const supabase = useSupabaseClient()

const store = useStore()
const { user, userPref } = storeToRefs(store)
const pref = { ...userPref.value }
const newUserName = ref(user.value?.userName || '')

const newAvatar = ref({ preview: null, image: null })

const handleSubmit = async () => {
    if (newAvatar.value.image) {
        console.log('got image')
        const { data, error } = await supabase.storage
            .from('avatar')
            .upload(`public/avatar_${user.value.id}`, newAvatar.value.image, {
                cacheControl: '3600',
                upsert: true,
            })
        if (error) {
            console.error(error)
        }
        if (data) {
            console.log(data)
            const config = useRuntimeConfig()
            const SUPABASE_URL = config.public.SUPABASE_URL
            //@ts-ignore
            const newAvatarLink = `${SUPABASE_URL}/storage/v1/object/public/${data?.fullPath}`
            console.log('newAvatarLink:', newAvatarLink)
        }
    }
}

const uploadMedia = (event) => {
    const input = event.target
    if (input.files[0]) {
        const reader = new FileReader()
        reader.onload = (e) => {
            newAvatar.value.preview = e.target.result
        }
        newAvatar.value.image = input.files[0]
        reader.readAsDataURL(input.files[0])
    }
    // const fileName = `${info.value.make}_${info.value.model}_${Date.now()}`
    // const { data, error } = await supabase
    // .from('avatar')
    // .upload(`public/avatar_${fileName}`, 'avatarFile(NOTINQUOATS)', {
    //     cacheControl: '3600',
    //     upsert: true,
    // })
}
</script>
