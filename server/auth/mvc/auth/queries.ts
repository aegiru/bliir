import { H3Event, H3Error } from 'h3';

import { SessionTokens, StatusMessage } from '../../types';
import { login } from '../../utils/logins';
import { register } from '../../utils/registers';

export async function registerUser(event: H3Event): Promise<StatusMessage | H3Error> {
  const response = await register(event);
  if (response instanceof H3Error) return response;

  return response as StatusMessage;
}

export async function loginUser(event: H3Event): Promise<SessionTokens | H3Error> {
  const loginTokenOrError = await login(event);
  if (loginTokenOrError instanceof H3Error) return loginTokenOrError;
  
  return loginTokenOrError as SessionTokens;
}
