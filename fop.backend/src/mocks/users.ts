import {User} from "../models/User";
import uuid = require("uuid");

export const mockUsers: User[] = [
    {
        id: uuid.v4(),
        firstName: "Vicente",
        lastName: "Mauricio"
    }
]

export const mockMainUser = mockUsers[0]
