// https://nuxt.com/docs/api/configuration/nuxt-config
import 'reflect-metadata';

export default defineNuxtConfig({
  devtools: { enabled: true },
  nitro: {
    esbuild: {
      options: {
        tsconfigRaw: {
          compilerOptions: {
            experimentalDecorators: true,
          },
        },
      },
    },
  },
  runtimeConfig: {
    // database details:
    databaseType: process.env.DATABASE_TYPE,
    databaseHost: process.env.DATABASE_HOST,
    databasePort: process.env.DATABASE_PORT,
    databaseUsername: process.env.DATABASE_USERNAME,
    databasePassword: process.env.DATABASE_PASSWORD,
    databaseTarget: process.env.DATABASE_TARGET,
    // jwt secrets:
    authAccessTokenSecret: process.env.AUTH_ACCESS_TOKEN_SECRET,
    authRefreshTokenSecret: process.env.AUTH_REFRESH_TOKEN_SECRET,
    authResetTokenSecret: process.env.AUTH_RESET_TOKEN_SECRET,
    authVerifyTokenSecret: process.env.AUTH_VERIFY_TOKEN_SECRET,
    // jwt expiration times:
    accessTokenExpiration: '1',
    accessTokenUnits: 'h',
    refreshTokenExpiration: '14',
    refreshTokenUnits: 'd',

    timeUnitMap: {
      s: 1000,
      m: 1000 * 60,
      h: 1000 * 60 * 60,
      d: 1000 * 60 * 60 * 24,
      w: 1000 * 60 * 60 * 24 * 7,
      y: 1000 * 60 * 60 * 24 * 365,
    },
  },
});
