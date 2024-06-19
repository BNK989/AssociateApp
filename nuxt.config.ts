// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'Associate Game',
      meta: [
        // { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'A fun chat like association game for one or more players', name: 'Give it a shot play now!', content: 'My awesome app' }
      ],
    }
  },
  
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode', '@nuxtjs/supabase', '@vueuse/nuxt', // {
  //   autoImports: ['defineStore', 'acceptHMRUpdate']
  // },
  '@pinia/nuxt', "@nuxt/image"],
  supabase: {
    // Options
    redirect: false,
  },
  imports: {
    dirs: ['stores'],
  }
})