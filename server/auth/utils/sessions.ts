import { H3Event, H3Error } from 'h3';

import type { Session } from '../types.d';
import { makeRandomString, makeUUID } from './passwords';
import { insertNewSession } from '~/server/database/queries/inserts/sessions';

export async function createUserSession(userId: string, accessToken: string, event: H3Event): Promise<H3Error | Session> {
  if (!userId) {
    console.log('No user ID provided.');
    return createError({
      statusCode: 500,
      statusMessage: 'Server error.',
    });
  }

  if (!accessToken) {
    console.log('No access token provided.');
    return createError({
      statusCode: 500,
      statusMessage: 'Server error.',
    });
  }

  if (!event) {
    console.log('No event provided.');
    return createError({
      statusCode: 500,
      statusMessage: 'Server error.',
    });
  }

  const csrfToken = makeRandomString(32);
  const ipAddress = getRequestHeader(event, 'x-forwarded-for');

  const session = {
    userId: userId,
    sessionId: makeUUID(),
    accessToken: accessToken,
    startTimestamp: new Date(),
    csrfToken: csrfToken,
    ipAddress: ipAddress ? ipAddress : 'None.',
  } as Session;

  const status = await insertNewSession(session);

  if (status.statusCode !== 200) {
    console.log('Error creating session:', status);
    return createError(status);
  }

  return session;
}
