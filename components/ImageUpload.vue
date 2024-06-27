<template>
    <button class="border border-bkg_dark/50 px-6 py-3" @click="uploadFile">Upload Image</button>
</template>

<script lang="ts">
import { updateImage } from '../services/updateImage'

import { openUploadModal } from '@bytescale/upload-widget-vue'
import type {
    UploadWidgetConfig,
    UploadWidgetResult,
    //@ts-ignore
} from '@bytescale/upload-widget'
import type { PreventableEvent } from '@bytescale/upload-widget-vue'

// -----
// Configuration:
// https://www.bytescale.com/docs/upload-widget#configuration
// -----

const config = useRuntimeConfig()
const SUPABASE_URL = config.public.SUPABASE_URL
const options: UploadWidgetConfig = {
    // apiKey: config.public.BYTESCALE_KEY, // This is your API key.
    apiKey: process.env.PBYTESCALE_KEY,
    maxFileCount: 1,
    editor: {
        images: {
            allowResizeOnMove: true,
            crop: true,
            cropRatio: 1,
            cropShape: 'circ',
        },
    },
    layout: {
        locale: {
            uploadFileBtn: "Upload an Image",
        }
    }
}

export default {
    name: 'App',
    methods: {
        uploadFile(event: PreventableEvent) {
            openUploadModal({
                event,
                options,
                onComplete: (files: UploadWidgetResult[]) => {
                    if (files.length === 0) {
                        alert('No files selected.')
                    } else {
                        console.log('files urls:', files[0].fileUrl)
                        updateImage(files[0].fileUrl)
                    }
                },
            })
        },
    },
}
</script>
