export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ['@nuxtjs/eslint-module', '@nuxtjs/tailwindcss'],

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://encore.scdn.co/fonts/CircularSp-Book-4eaffdf96f4c6f984686e93d5d9cb325.woff2'
        },
        {
          rel: 'stylesheet',
          href: 'https://encore.scdn.co/fonts/CircularSp-Bold-fe1cfc14b7498b187c78fa72fb72d148.woff2'
        },
        {
          rel: 'stylesheet',
          href: 'https://encore.scdn.co/fonts/CircularSpTitle-Bold-2fbf72b606d7f0b0f771ea4956a8b4d6.woff2'
        },
        {
          rel: 'stylesheet',
          href: 'https://encore.scdn.co/fonts/CircularSpTitle-Black-3f9afb402080d53345ca1850226ca724.woff2'
        },
        {
          rel: 'stylesheet',
          href: 'https://open.spotifycdn.com/cdn/fonts/spoticon_regular_2.d728648c.woff2'
        }
      ]
    }
  }
})
