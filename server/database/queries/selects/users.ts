import AppDataSource from '../../index';
import { Users } from '../../entities/Users';
 
export async function selectUserByEmail(email: string): Promise<Users> {
  const foundUser: Users = await AppDataSource
    .createQueryBuilder()
    .select()
    .from(Users, 'Users')
    .where('email = :email', { email })
    .getOneOrFail();

  return foundUser;
}

export async function selectUserByID(id: string): Promise<Users> {
  const foundUser: Users = await AppDataSource
    .createQueryBuilder()
    .select()
    .from(Users, 'Users')
    .where('id = :id', { id })
    .getOneOrFail();

  return foundUser;
}

export async function selectUserByUsername(username: string): Promise<Users> {
  const foundUser: Users = await AppDataSource
    .createQueryBuilder()
    .select()
    .from(Users, 'Users')
    .where('username = :username', { username })
    .getOneOrFail();

  return foundUser;
}
