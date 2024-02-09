// https://nuxt.com/docs/api/configuration/nuxt-config
import "reflect-metadata";

export default defineNuxtConfig({
  devtools: { enabled: true },
  nitro: {
    esbuild: {
      options: {
        tsconfigRaw: {
          compilerOptions: {
            experimentalDecorators: true,
          }
        }
      }
    }
  },
  
})
