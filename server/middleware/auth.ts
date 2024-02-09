import selectByCookie from '../database/queries/selects/sessions/selectByCookie'

export default defineEventHandler(async (event) => {
    if (event.path.includes('/api/') && !event.path.includes('/auth/')) {
        const cookies = parseCookies(event);

        if (cookies['auth'] !== undefined) {
            try {
                const session = await selectByCookie(cookies['auth']);

                if (session.expiration_timestamp > new Date()) {
                    event.context.auth = {
                        user: session.users_id,
                        authorized: true
                    }

                    return;
                } else {
                    return {
                        status: 401,
                        body: 'Unauthorized.'
                    }
                }
            } catch (error) {
                return {
                    status: 500,
                    body: error
                }
            }
        } else {
            return {
                status: 401,
                body: 'Unauthorized.'
            }
        }
    }

    
})
  