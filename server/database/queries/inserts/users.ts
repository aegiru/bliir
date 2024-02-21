import AppDataSource from '../../index';
import { Users } from '../../entities/Users';
import { StatusMessage } from '~/server/auth/types';

export async function createUser(username: string, password_hash: string, email: string): Promise<StatusMessage> {
  try {
    await AppDataSource
      .createQueryBuilder()
      .insert()
      .into(Users)
      .values({ username, password_hash, email })
      .execute();

    return {
      statusCode: 200,
      statusMessage: 'User registered.',
    };
  } catch (error) {
    return {
      statusCode: 500,
      statusMessage: 'Database error.',
    };
  }
}
