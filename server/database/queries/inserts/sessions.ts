import AppDataSource from '../../index';
import { Sessions } from '../../entities/Sessions';
import { Session, StatusMessage } from '~/server/auth/types';

export async function insertNewSession(session: Session): Promise<StatusMessage> {
  try {
    await AppDataSource
      .createQueryBuilder()
      .insert()
      .into(Sessions)
      .values({
        users_id: session.userId,
        session_id: session.sessionId,
        access_token: session.accessToken,
        start_timestamp: session.startTimestamp,
        csrf_token: session.csrfToken,
        ip_address: session.ipAddress,
      })
      .execute();

    return {
      statusCode: 200,
      statusMessage: 'User registered.',
    };
  } catch (error) {
    return {
      statusCode: 500,
      statusMessage: 'Database error.',
    };
  }
}
