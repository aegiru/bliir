import { H3Error } from 'h3';

import { insertRefreshToken } from '~/server/database/queries/inserts/refreshtokens';
import { deleteUserOutdatedRefreshTokens } from '~/server/database/queries/deletes/refreshtokens';

export async function storeRefreshToken(tokenID: string, userID: string): Promise<H3Error | void> {
  await cleanupRefreshTokens(userID);

  const error = null;

  try {
    await insertRefreshToken(userID, tokenID);
  } catch (error) {
    console.error(error);
    error = createError({
      statusCode: 500,
      statusMessage: 'Server error.',
    });
  }

  if (error) return error;
}

export async function cleanupRefreshTokens(userID: string): Promise<void> {
  try {
    await deleteUserOutdatedRefreshTokens(userID);
  } catch (error) {
    console.error(error);
  }
}
