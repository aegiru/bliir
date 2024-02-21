import { H3Event, H3Error } from 'h3';

import { JSONResponse, SessionTokens, StatusMessage } from '../../types';
import { loginUser, registerUser } from './queries';
import { clearAuthCookies, setBrowserCookies } from '../../utils/cookies';

export async function register(event: H3Event): Promise<StatusMessage> {
  const response = {} as StatusMessage;
  const statusOrError = await registerUser(event);

  response.statusCode = statusOrError.statusCode;
  response.statusMessage = statusOrError.statusMessage;

  return response;
}

export async function login(event: H3Event): Promise<JSONResponse> {
  const response = {} as JSONResponse;

  const errorOrTokens = await loginUser(event);

  if (errorOrTokens instanceof H3Error) {
    clearAuthCookies(event);

    response.status = "fail";
    response.error = errorOrTokens;
    return response;
  }

  const tokens = errorOrTokens as SessionTokens;

  //setBrowserCookies(event, tokens);
}
