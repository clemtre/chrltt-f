export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  env: {
    apiUrl: process.env.API_URL,
    baseUrl: process.env.BASE_URL,
    // NODE_ENV: process.env.NODE_ENV
  },
  publicRuntimeConfig: {
    apiUrl: process.env.API_URL,
    baseUrl: process.env.BASE_URL
  },
  privateRuntimeConfig: {
    apiUrl: process.env.API_URL,
    baseUrl: process.env.BASE_URL
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Charlotte Lemaire",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@assets/css/fonts.css',
    '@assets/css/variables.css',
    '@assets/css/global.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~plugins/global.client.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "@nuxtjs/markdownit"
  ],

  markdownit: {
    runtime: true
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "https://porte-secrete.unexploredfields.com/",
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
