import * as argon2 from 'argon2';
import { H3Error } from 'h3';
import { v4 as uuidv4 } from 'uuid';
import crypto from 'crypto';

export async function hashPassword(password: string): Promise<string | H3Error > {
  try {
    return await argon2.hash(password);
  } catch (error) {
    return createError({
      statusCode: 500,
      statusMessage: 'Password error.',
    });
  }
}

export async function verifyPassword(hash: string, password: string): Promise<boolean> {
  try {
    return (await argon2.verify(hash, password));
  } catch (error) {
    return false;
  }
}

export function makeUUID(): string {
  return uuidv4();
}

export function makeRandomString(length: number): string {
  return crypto.randomBytes(length).toString('hex');
}
