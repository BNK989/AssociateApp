// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import unheadResolverPlugin from './plugins/vite/unhead-resolver';
import prismaMockPlugin from './plugins/vite/prisma-resolver';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineNuxtConfig({
  vite: {
    plugins: [
      unheadResolverPlugin(),
      prismaMockPlugin()
    ],
    resolve: {
      alias: {
        'punycode': 'punycode/',
        '@unhead/vue/client': resolve(__dirname, './shims/unhead-vue-client.ts'),
        '@unhead/vue/plugins': resolve(__dirname, './shims/unhead-vue-plugins.ts'),
        '@unhead/vue/server': resolve(__dirname, './shims/unhead-vue-server.ts'),
        '@unhead/vue/utils': resolve(__dirname, './shims/unhead-vue-utils.ts')
      }
    },
    ssr: {
      noExternal: ['@unhead/vue', 'unhead']
    },
    optimizeDeps: {
      include: ['@unhead/vue']
    }
  },
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
              language: 'en-US',
              name: 'English',
              dir: 'ltr',
              file: 'en-US.json',
          },
          {
              code: 'es',
              language: 'es-ES',
              name: 'Español',
              dir: 'ltr',
              file: 'es-ES.json',
          },
          {
              code: 'he',
              language: 'he-IL',
              name: 'Hebrew',
              dir: 'rtl',
              file: 'he-IL.json',
          },
      ],
  },

  nitro: {
    compatibilityDate: '2025-04-12',
    moduleSideEffects: ['@prisma/client'],
    externals: {
      // Exclude Prisma completely from the build
      inline: ['@unhead/vue', 'unhead'],
      external: ['@prisma/client', '.prisma/client', '.prisma']
    }
  },
})