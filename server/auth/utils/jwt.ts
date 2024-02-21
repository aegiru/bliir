import jwt from 'jsonwebtoken';

import { PublicUser } from '../types';
import { makeUUID } from './passwords';

const config = useRuntimeConfig();

export function createUserAccessToken(publicUser: PublicUser): string {
  return jwt.sign(publicUser, config.authAccessTokenSecret, {
    expiresIn: (config.accessTokenExpiration + config.accessTokenUnits),
    issuer: 'bliir.auth',
    jwtid: makeUUID(),
  });
}

export function createUserRefreshToken(publicUser: PublicUser, tokenId: string): string {
  return jwt.sign(publicUser, config.authRefreshTokenSecret, {
    expiresIn: (config.refreshTokenExpiration + config.refreshTokenUnits),
    issuer: 'bliir.auth',
    jwtid: tokenId,
  });
}
