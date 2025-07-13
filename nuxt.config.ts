import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  modules: ['@vite-pwa/nuxt'],
  css: ['@/assets/css/tailwind.css'],
  app: {
    head: {
      title: 'AESCORE : Write Better Score Smarter',
      link: [
        { rel: 'icon', type: 'image/png', href: '/icons/icon-16x16.png' }, // For .ico file
        // Or use PNG or SVG
        // { rel: 'icon', type: 'image/png', href: '/icon.png' }
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'This is a description of my site' }
      ],
       script: [
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js',
        defer: true
      },
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.5.25/jspdf.plugin.autotable.min.js',
        defer: true
      }
    ]
    }
  },
  pwa: {
    manifest: {
      name: "AesCore",
      short_name: "AesCore",
      start_url: "/",
      display: "standalone",
      description: "AesCore : Score Smarter Write Better",
      icons: [
        {
          src: 'icons/icon-16x16.png',
          sizes: '16x16',
          type: 'image/png',
        },
        {
          src: 'icons/icon-32x32.png',
          sizes: '32x32',
          type: 'image/png',
        },
        {
          src: 'icons/icon-32x32.png', // updated: was a duplicate 32x32
          sizes: '64x64',
          type: 'image/png',
        },
        {
          src: 'icons/icon-192x192.png', // updated: sizes now match src
          sizes: '144x144',
          type: 'image/png',
        },
        {
          src: 'icons/icon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
      theme_color: '#004aad',
      background_color: '#ffffff'
    }, // 👈 this closing brace was missing

    workbox: {
      navigateFallback: '/',
    },
    devOptions: {
      enabled: true,
      type: 'module',
    }
  },
  ssr: false, // or true depending on your use case
  nitro: {
    preset: 'netlify'
  },
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  vite: {
    plugins: [
      tailwindcss()
    ],
  },
})
