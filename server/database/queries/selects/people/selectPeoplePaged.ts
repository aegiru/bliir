import AppDataSource from '../../../index'
import { People } from '../../../entities/People'

export default async function selectPeoplePaged(page: number, pageSize: number): Promise<People[]> {
    const people: People[] = await AppDataSource
        .createQueryBuilder()
        .select()
        .from(People, "People")
        .skip(page * pageSize)
        .take(pageSize)
        .getMany();

    return people;
}