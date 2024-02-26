import { H3Event, H3Error } from 'h3';

import { getUserByUsername, getUserByEmail } from './users';
import { verifyPassword, makeUUID } from './passwords';
import { createUserAccessToken, createUserRefreshToken } from './jwt';
import { storeRefreshToken } from './tokens';
import { Session, SessionTokens } from '../types';
import { createUserSession } from './sessions';
import { isLoginEventValid } from './validators';

const config = useRuntimeConfig();

export async function login(event: H3Event): Promise<H3Error | SessionTokens> {
  const body = await readBody(event);
  const loginType = await isLoginEventValid(event);
  if (loginType instanceof H3Error) return loginType;

  let user;
  if (loginType === 'email') {
    user = await getUserByEmail(body.login);
  } else if (loginType === 'username') {
    user = await getUserByUsername(body.login);
  }

  if (user === undefined || user === null) {
    return createError({
      statusCode: 401,
      statusMessage: 'Invalid username.',
    });
  }

  if (!await verifyPassword(user.passwordHash, body.password)) {
    return createError({
      statusCode: 401,
      statusMessage: 'Invalid password.',
    });
  }

  const publicUser = {
    uuid: user.id,
    email: user.email,
  };

  const accessToken = createUserAccessToken(publicUser);

  const tokenId = makeUUID();
  const refreshToken = createUserRefreshToken(publicUser, tokenId);

  const storeTokenError = await storeRefreshToken(tokenId, user.id);
  if (storeTokenError) return storeTokenError;

  const tokens = {
    accessToken,
    refreshToken,
  } as SessionTokens;

  const sessionOrError = await createUserSession(user.id, accessToken, event);

  if (sessionOrError instanceof H3Error) {
    console.log("Couldn't creating session.");
    return createError({
      statusCode: 500,
      statusMessage: 'Server error.',
    });
  }

  const session = sessionOrError as Session;

  tokens.sessionId = session.sessionId;

  return tokens;
}
