// https://nuxt.com/docs/api/configuration/nuxt-config
import {fileURLToPath} from "mlly";

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxt/eslint', '@nuxt/image'],
  css: ['~/assets/styles/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/styles/variables.scss";'
        },
      },
    },
  },
  router: {
    options: {
      linkActiveClass: 'active',
      linkExactActiveClass: 'active-exact',
    }
  },
  alias: {
    'assets': fileURLToPath(new URL('./assets', import.meta.url)),
  },
  app: {
    head: {
      title: 'Miranda Demo',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Baloo+2:wght@400..800&display=swap'},
      ],
      noscript: [
        { textContent: 'JavaScript is required' }
      ]
    }
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
    {
      path: '~/components/icons',
      pathPrefix: false,
    },
  ],
})