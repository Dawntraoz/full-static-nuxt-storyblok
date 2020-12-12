export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Full Static | Nuxt & Storyblok',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Get Benefits Using Full Static in your NuxtJS project with Storyblok as a Headless CMS',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~/assets/css/main.css'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['~/plugins/components', '~/plugins/preview.client.js'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/robots',
    '@nuxtjs/pwa',
    'nuxt-i18n',
    [
      'storyblok-nuxt',
      {
        accessToken: process.env.API_KEY,
        cacheProvider: 'memory',
      },
    ],
  ],

  pwa: {
    meta: {
      theme_color: '#3B82F6',
    },
  },

  i18n: {
    locales: [
      {
        code: 'en',
        name: 'EN',
      },
      {
        code: 'es',
        name: 'ES',
      },
    ],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: {
          benefits: 'Benefits',
          techstack: 'JAMstack',
          benefitsUrl: 'our-benefits',
          techstackUrl: 'our-jamstack',
          footer: {
            desc:
              'Get incredible results in performance, surprise your audience by returning to the Full Static.',
            internal: 'Internal links',
            social: 'Social media',
            contact: 'Contact',
          },
        },
        es: {
          benefits: 'Beneficios',
          techstack: 'JAMstack',
          benefitsUrl: 'nuestros-beneficios',
          techstackUrl: 'nuestro-jamstack',
          footer: {
            desc:
              'Consigue resultados increíbles en performance, sorprende a tu público volviendo al Full Static.',
            internal: 'Links internos',
            social: 'Social media',
            contact: 'Contacto',
          },
        },
      },
    },
    parsePages: false,
    pages: {
      '_slug/index': {
        en: '/:slug',
        es: '/:slug',
      },
    },
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
