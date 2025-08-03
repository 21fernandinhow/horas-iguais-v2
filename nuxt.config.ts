import { defineNuxtConfig } from "nuxt/config";
import hours from "./app/data/hours.json";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  css: ["~/assets/css/app.css"],

  postcss: {
    plugins: {
      "@tailwindcss/postcss": {},
      autoprefixer: {},
    },
  },

  modules: [
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/scripts",
  ],

  nitro: {
    preset: "static",
    prerender: {
      routes: Object.keys(hours).map(
        (hour) => `/hora/${encodeURIComponent(hour)}`
      ),
    },
  },
});
