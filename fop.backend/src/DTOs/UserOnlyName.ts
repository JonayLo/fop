import {User} from "../models/User";

export interface UserOnlyName {
    id: string;
    firstName: string;
    lastName: string;
    avatarUrl: string;
}

export const toUserOnlyName = (user: User): UserOnlyName => {
    return {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        avatarUrl: user.avatarUrl
    };
}
