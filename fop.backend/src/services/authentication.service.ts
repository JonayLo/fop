import {toUserOnlyName, UserOnlyName} from "../DTOs/UserOnlyName";
import {sha256} from "js-sha256";
import {UserDao} from "../DAOs/user.dao";

export class AuthenticationService {
    private static instance: AuthenticationService;

    private constructor() {

    }

    static getInstance() {
        if (!AuthenticationService.instance) {
            AuthenticationService.instance = new AuthenticationService();
        }
        return AuthenticationService.instance;
    }

    login(email: string, password: string): UserOnlyName | undefined {
        const hashedPassword = sha256(password);
        const user = UserDao.getInstance().getByEmailAndPassword(email, hashedPassword);
        if (!user) {
            return undefined
        }
        return toUserOnlyName(user);
    }
}
