// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',

  css: [
      './assets/css/tailwind.css',
      '@/assets/css/styling.css',

  ],

  link: [
    { rel: "icon", type: "image/x-icon", href: "/public/favicon.ico" },
  ],

  devtools: { enabled: true },

  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },

  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Lalezar&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap',
        },
      ],
    },
  },

  modules: ['@nuxtjs/tailwindcss'],
})