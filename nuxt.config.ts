// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  runtimeConfig: {
    public: {
      SERVER_HOST: process.env.SERVER_HOST,
      SERVER_PORT: process.env.SERVER_PORT
    }
  }
})
