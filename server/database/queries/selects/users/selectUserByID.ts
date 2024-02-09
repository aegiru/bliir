import AppDataSource from '../../../index'
import { Users } from '../../../entities/Users'

export default async function selectUserByID(id: string): Promise<Users> {
    const foundUser: Users = await AppDataSource
        .createQueryBuilder()
        .select()
        .from(Users, "Users")
        .where("id = :id", { id })
        .getOneOrFail();

    return foundUser;
}