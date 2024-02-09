import authController from '~/server/auth/mvc/auth/controller'

export default defineEventHandler(async (event) => {
    return authController(event);
});