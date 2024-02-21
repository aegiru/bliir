import AppDataSource from '../../index';
import { Sessions } from '../../entities/Sessions';

export async function selectByCookie(session_cookie: string): Promise<Sessions> {
  const session = await AppDataSource
    .createQueryBuilder()
    .select()
    .from(Sessions, 'Sessions')
    .where('session_cookie = :session_cookie', { session_cookie })
    .getOneOrFail();

  return session;
}
