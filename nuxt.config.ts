// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@vueuse/nuxt','@nuxtjs/tailwindcss','nuxt-primevue','nuxt-headlessui',],
  css: [ '~/assets/css/main.css',],
  compatibilityDate: '2024-07-25',
})
