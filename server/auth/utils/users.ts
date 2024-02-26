import { User } from '../types';
import { selectUserByEmail, selectUserByUsername }from '~/server/database/queries/selects/users';
import { convertDatabaseUserToAuthUser } from './converters';

export async function getUserByUsername(username: string): Promise<User | null> {
  let user = null;

  try {
    const databaseUser = await selectUserByUsername(username);
    user = convertDatabaseUserToAuthUser(databaseUser);
  } catch (error) {
    console.error(error);
  }

  return user;
}

export async function getUserByEmail(email: string): Promise<User | null> {
  let user = null;

  try {
    const databaseUser = await selectUserByEmail(email);
    user = convertDatabaseUserToAuthUser(databaseUser);
  } catch (error) {
    console.error(error);
  }

  return user;
}
