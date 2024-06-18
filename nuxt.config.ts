// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  
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