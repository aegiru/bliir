import { H3Event, H3Error } from 'h3';
import { hashPassword } from './passwords';
import { createUser } from '~/server/database/queries/inserts/users';
import { StatusMessage } from '../types';

export async function register(event: H3Event): Promise<H3Error  | StatusMessage> {
    const body = await readBody(event);

  const hashedPasswordOrError = await hashPassword(body.password);
  if (hashedPasswordOrError instanceof H3Error) return hashedPasswordOrError;

  const hashedPassword = hashedPasswordOrError as string;
  const { username, email } = body;

  const response = await createUser(username, hashedPassword, email);

  if (response.statusCode === 500) {
    return createError({
      statusCode: 500,
      statusMessage: response.statusMessage,
    });
  }

  return response;
}