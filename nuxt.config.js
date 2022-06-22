export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",
  env: {
    API_URL: process.env.API_URL,
    CDN: process.env.CDN,
  },
  publicRuntimeConfig: {
    API_URL: process.env.API_URL,
    CDN: process.env.CDN,
  },
  privateRuntimeConfig: {
    API_URL: process.env.API_URL,
    CDN: process.env.CDN,
  },

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

  css: [
    "@assets/css/fonts.css",
    "@assets/css/variables.css",
    "@assets/css/global.css",
  ],

  plugins: ["~plugins/global.client.js"],

  components: true,

  // buildModules: ["@nuxt/image"],

  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "@nuxtjs/markdownit",
  ],

  markdownit: {
    runtime: true,
  },

  build: {
    loaders: {
      sass: {
        implementation: require('sass'),
      },
      scss: {
        implementation: require('sass'),
      },
    },
    postcss:{
      plugins:{
        'postcss-nested':{}
      }
    }
  }
}
