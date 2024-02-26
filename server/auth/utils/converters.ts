import { Users } from "~/server/database/entities/Users";
import { User } from "../types";

export function convertDatabaseUserToAuthUser(user: Users): User {
    return {
        id: user.id,
        username: user.username,
        email: user.email,
        passwordHash: user.password_hash,
        creationTimestamp: user.creation_timestamp,
    } as User;
}