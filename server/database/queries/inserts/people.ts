import AppDataSource from '../../index';
import { People } from '../../entities/People';

export async function createPerson(name: string, user_id: string) {
  await AppDataSource
    .createQueryBuilder()
    .insert()
    .into(People)
    .values({ name, added_by: user_id })
    .execute();
}
