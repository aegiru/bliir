import { People } from '../../database/entities/People';
import { selectPeoplePaged } from '../../database/queries/selects/people';

export default defineEventHandler(async (event) => {
  try {
    const allPeople: People[] = await selectPeoplePaged(0, 25);

    return {
      status: 200,
      body: allPeople,
    };
  } catch (error) {
    return {
      status: 500,
      body: error,
    };
  }
});
