import * as argon2 from "argon2";
import { H3Error } from "h3";

export async function hashPassword(password: string): Promise<string | H3Error > {
    try {
        return await argon2.hash(password);
    } catch (error) {
        return createError({
            statusCode: 500,
            statusMessage: "Password error."
        })
    }
}

export async function verifyPassword(hash: string, password: string): Promise<boolean> {
    try {
        return (await argon2.verify(hash, password));
    } catch (error) {
        return false;
    }
}