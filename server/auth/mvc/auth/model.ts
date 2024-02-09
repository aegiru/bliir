import { H3Event } from "h3";
import { StatusMessage } from "../../types";
import { registerUser } from "./queries";

export async function register(event: H3Event): Promise<StatusMessage> {
    let response = {} as StatusMessage;
    const statusOrError = await registerUser(event);

    response.statusCode = statusOrError.statusCode;
    response.statusMessage = statusOrError.statusMessage;

    return response;
}