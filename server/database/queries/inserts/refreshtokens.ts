import AppDataSource from '../../index';
import { Refresh_Tokens } from '../../entities/Refresh_Tokens';

const config = useRuntimeConfig();

export async function insertRefreshToken(users_id: string, refresh_token: string) {
  await AppDataSource
    .createQueryBuilder()
    .insert()
    .into(Refresh_Tokens)
    .values({ users_id, refresh_token, expiration_timestamp: Date.now() + (config.timeUnitMap[config.refreshTokenUnits] * config.refreshTokenExpiration) })
    .execute();
}
