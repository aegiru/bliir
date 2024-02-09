import { H3Event, H3Error } from "h3";
import { hashPassword } from "../../utils/passwords";
import createUser from '~/server/database/queries/inserts/users/createUser';
import { StatusMessage } from "../../types";

export async function registerUser(event: H3Event): Promise<StatusMessage | H3Error> {
    const body = await readBody(event);

    const hashedPasswordOrError = await hashPassword(body.password);
    if (hashedPasswordOrError instanceof H3Error) return hashedPasswordOrError;

    const hashedPassword = hashedPasswordOrError as string;
    const { username, email } = body;

    const response = await createUser(username, hashedPassword, email);

    if (response.statusCode === 500) {
        throw createError({
            statusCode: 500,
            statusMessage: response.statusMessage,
        })
    }

    return response;
}

export async function loginUser(event: H3Event): Promise<StatusMessage | H3Error> {
    
}