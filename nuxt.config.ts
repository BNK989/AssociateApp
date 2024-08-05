// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    routeRules: {
        '/': { ssr: true },
        '/game/**': { ssr: false },
    },
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
                {
                    name: 'interactive-widget',
                    content: 'resizes-content',
                },
            ],
        },
    },

    devtools: { enabled: true },
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/color-mode', // {
        '@nuxtjs/supabase', //   autoImports: ['defineStore', 'acceptHMRUpdate']
        '@vueuse/nuxt', // },
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
                dir: 'ltr',
                file: 'en-US.json',
            },
            {
                code: 'es',
                iso: 'es-ES',
                name: 'Español',
                dir: 'ltr',
                file: 'es-ES.json',
            },
            {
                code: 'he',
                iso: 'he-IL',
                name: 'Hebrew',
                dir: 'rtl',
                file: 'he-IL.json',
            },
        ],
    },
})
