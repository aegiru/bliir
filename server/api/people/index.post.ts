import AppDataSource from '../../database/index'
import { People } from '../../database/entities/People'

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const { name } = body;

    const person = new People();
    person.name = name;

    try {
        const peopleRepository = AppDataSource.getRepository(People);
        const newPerson = await peopleRepository.save(person);

        return {
            status: 200,
            body: newPerson
        }
    } catch (error) {
        return {
            status: 500,
            body: error
        }
    }
})