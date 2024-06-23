// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['~/assets/css/main.css'],
    app: {
        head: {
            title: 'Associate Game',
            meta: [
                // { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                {
                    hid: 'A fun chat like association game for one or more players',
                    name: 'Give it a shot play now!',
                    content: 'My awesome app',
                },
            ],
        },
    },

    devtools: { enabled: true },
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/color-mode',
        '@nuxtjs/supabase', // {
        '@vueuse/nuxt', //   autoImports: ['defineStore', 'acceptHMRUpdate']
        // },
        '@pinia/nuxt',
        '@nuxt/image',
        '@nuxtjs/i18n',
    ],
    supabase: {
        // Options
        redirect: false,
    },
    imports: {
        dirs: ['stores'],
    },
    //@ts-ignore
    i18n: {
        strategy: 'prefix_except_default',
        defaultLocale: 'en',
        lazy: true,
        langDir: 'locales',
        locales: [
            {
                code: 'en',
                iso: 'en-US',
                name: 'English',
                file: 'en-US.json',
            },
            {
                code: 'es',
                iso: 'es-ES',
                name: 'Español',
                file: 'es-ES.json',
            },
            {
                code: 'he',
                iso: 'he-IL',
                name: 'Hebrew',
                file: 'he-IL.json',
            },
        ],
    },
})
