import AppDataSource from '../../index';
import { Refresh_Tokens } from '../../entities/Refresh_Tokens';

export async function deleteRefreshToken(refresh_token: string) {
  await AppDataSource
    .createQueryBuilder()
    .delete()
    .from(Refresh_Tokens)
    .where('refresh_token = :refresh_token', { refresh_token })
    .execute();
}

export async function deleteUserOutdatedRefreshTokens(users_id: string) {
  await AppDataSource
    .createQueryBuilder()
    .delete()
    .from(Refresh_Tokens)
    .where('users_id = :users_id', { users_id })
    .andWhere('expires_at < NOW()')
    .execute();
}
