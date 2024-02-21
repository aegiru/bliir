import { H3Event} from 'h3';

import { SessionTokens } from '../types';

const config = useRuntimeConfig();

export function clearAuthCookies(event: H3Event): void {
    deleteCookie(event, "auth-access-token");
    deleteCookie(event, "auth-refresh-token");
    deleteCookie(event, "auth-session-id");
}

export function setAppCookies(event: H3Event, tokens: SessionTokens) {
    setHeader(event, "auth-access-token", "Bearer " + tokens.accessToken);
    setHeader(event, "auth-refresh-token", "Bearer " + tokens.refreshToken);
    if (tokens.sessionId) setHeader(event, "auth-session-id", tokens.sessionId);
}

export function setBrowserCookies(event: H3Event, tokens: SessionTokens) {
    setCookie(event, "auth-access-token", "Bearer " + tokens.accessToken, {
        httpOnly: true,
        secure: true,
    });

    setCookie(event, "auth-refresh-token", "Bearer " + tokens.refreshToken, {
        httpOnly: true,
        secure: true,
        expires: new Date(Date.now() + (config.refreshTokenExpirationTime * config.timeUnitMap[config.refreshTokenUnits])),
    });

    if (tokens.sessionId) setCookie(event, "auth-session-id", tokens.sessionId); 
}