import selectByCookie from '../database/queries/selects/sessions';

export default defineEventHandler(async (event) => {
  if (event.path.includes('/api/') && !event.path.includes('/auth/')) {
    const cookies = parseCookies(event);

    if (cookies.auth === undefined) {
      return {
        status: 401,
        body: 'Unauthorized.',
      };
    }

    try {
      const session = await selectByCookie(cookies.auth);

      if (session.expiration_timestamp < new Date()) {
        return {
          status: 401,
          body: 'Unauthorized.',
        };
      }

      event.context.auth = {
        user: session.users_id,
        authorized: true,
      };

      return;
    } catch (error) {
      return {
        status: 500,
        body: error,
      };
    }
  }
});
