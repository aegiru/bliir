import { User } from '../types';
import selectUserByUsername from '~/server/database/queries/selects/users/selectUserByUsername';
import selectUserByEmail from '~/server/database/queries/selects/users/selectUserByEmail';

export async function getUserByUsername(username: string): Promise<User | null> {
  let user = null;

  try {
    user = await selectUserByUsername(username) as User;
  } catch (error) {
    console.error(error);
  }

  return user;
}

export async function getUserByEmail(email: string): Promise<User | null> {
  let user = null;

  try {
    user = await selectUserByEmail(email) as User;
  } catch (error) {
    console.error(error);
  }

  return user;
}
