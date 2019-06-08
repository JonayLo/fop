import {UserOnlyName} from "../DTOs/UserOnlyName";
import {mockUsers} from "../mocks/users";
import {User} from "../models/User";

export class UserDao {
    private static instance: UserDao;

    private constructor() {

    }

    static getInstance() {
        if (!UserDao.instance) {
            UserDao.instance = new UserDao()
        }
        return UserDao.instance
    }

    getAll(): UserOnlyName[] {
        return mockUsers
    }

    getByEmailAndPassword(email: string, password: string): User | undefined {
        return mockUsers.find(
            user => user.email === email && user.password === password
        );
    }
}