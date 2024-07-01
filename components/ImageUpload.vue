<template>
    <button class="border border-bkg_dark/50 px-6 py-3" @click="uploadFile">
        Upload Image
    </button>
</template>

<script lang="ts">
import { updateImage } from '../services/updateImage'
// import.meta.env.BYTESCALE_KEY

import { openUploadModal } from '@bytescale/upload-widget-vue'
import type {
    UploadWidgetConfig,
    UploadWidgetResult,
    //@ts-ignore
} from '@bytescale/upload-widget'
import type { PreventableEvent } from '@bytescale/upload-widget-vue'
// import env from 'dotenv'
const apiKey = import.meta.env.VITE_BYTESCALE_KEY

// -----
// Configuration:
// https://www.bytescale.com/docs/upload-widget#configuration
// -----

const config = useRuntimeConfig()
const options: UploadWidgetConfig = {
    // apiKey: config.public.BYTESCALE_KEY, // This is your API key.
    apiKey,
    editor: {
        images: {
            allowResizeOnMove: true,
            crop: true,
            cropRatio: 1,
            cropShape: 'circ',
        },
    },
    layout: 'modal',
    maxFileCount: 1,
    styles: {
        breakpoints: {
            fullScreenHeight: 420,
            fullScreenWidth: 750,
        },
        colors: {
            active: '#528fff',
            error: '#d23f4d',
            primary: '#377dff',
            shade100: '#333',
            shade200: '#7a7a7a',
            shade300: '#999',
            shade400: '#a5a6a8',
            shade500: '#d3d3d3',
            shade600: '#dddddd',
            shade700: '#f0f0f0',
            shade800: '#f8f8f8',
            shade900: '#222',
        },
    },
}

export default {
    name: 'App',
    computed: {
        myApiKey() {
            return process.env.BYTESCALE_KEY
        },
    },
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
