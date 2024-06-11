// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/supabase',
    '@pinia/nuxt',
    // {
    //   autoImports: ['defineStore', 'acceptHMRUpdate']
    // },
  ],
  supabase: {
    // Options
    redirect: false,
  },
  imports: {
    dirs: ['stores'],
  }
})
