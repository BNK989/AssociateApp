<template>
    <button
        class="border border-bkg_dark/50 px-6 py-3"
        @click.prevent.stop="isModalOpen = true">
        Upload Image
    </button>
    <div
        v-if="isModalOpen"
        @click="isModalOpen = false"
        class="fixed flex-center inset-0 w-full h-full bg-bkg_dark/30">
        <div class="relative w-2/4 h-2/3 bg-bkg rounded-lg">
            <label
                @click="triggerFileInput"
                class="absolute w-[90%] h-[90%] inset-0 m-auto flex-center rounded-lg border-2 border-dashed border-bkg_dark/30 cursor-pointer">
                upload
                <span class="sr-only">upload avatar</span>
                <input
                    type="file"
                    id="fileInput"
                    ref="fileInput"
                    @change.stop="uploadFile"
                    class="hidden" />
            </label>
        </div>
    </div>
</template>

<script lang="ts" setup>
import env from 'dotenv'
import { imageCompressionFunc, updateImage } from '@/services/updateImage'

//@ts-ignore
const apiKey = import.meta.env.VITE_SUPABASE_URL

const isModalOpen = ref(false)
const supabase = useSupabaseClient()
const fileInput = ref(null)
const imageUrl = ref('')

const triggerFileInput = (event) => {
    event.stopPropagation()
    // fileInput.value.click()
}

async function uploadFile(e) {
    const file = e.target.files[0]
    const regex = /\/([^/]+)$/
    const fileType = file.type.match(regex)[1]
    if (!file) return

    const compressedFile = await imageCompressionFunc(file)

    const { data, error } = await supabase.storage
        .from('avatar')
        .upload(`avatar_${Date.now()}.${fileType}`, compressedFile)
    if (error) {
        console.error(error)
        return
    }
    imageUrl.value = data.path
    await updateImage(`https://${apiKey}/storage/v1/object/public/avatar/${data.path}`)
    isModalOpen.value = false
}
</script>
