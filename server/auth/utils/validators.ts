import { H3Error, H3Event } from 'h3';

export async 

export async function isLoginEventValid(event: H3Event): Promise<H3Error | string> {
    const body = await readBody(event);

    const loginBodyError = isLoginBodyValid(body);
    if (loginBodyError) {
        return createError({
            statusCode: 400,
            statusMessage:  loginBodyError,
        });
    }

    if (isStringAnEmail(body.login)) {
        if (!validateEmail(body.login)) {
            return createError({
                statusCode: 400,
                statusMessage: "Invalid email.",
            });
        }
    
        return "email";
    }

    return "username";
}

export function isLoginBodyValid(body: Object): string | void {
    if ("login" in body === false) {
        return "Login is required.";
    }

    if ("password" in body === false) {
        return "Password is required.";
    }
}

export function isStringAnEmail(string: string): boolean {
    return string.includes('@');
}

export function validateEmail(email: string): boolean {
    const emailRegEx: RegExp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    
    return emailRegEx.test(email);
}