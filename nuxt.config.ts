// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@vueuse/nuxt','@nuxtjs/tailwindcss','nuxt-primevue',],
  css: [ '~/assets/css/main.css',],
})
