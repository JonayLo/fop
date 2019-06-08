import {User} from "../models/User";

export const mockUsers: User[] = [
    {
        id: "adc91d90-fbf6-436f-81d7-2df43f159933",
        firstName: "Vicente",
        lastName: "Mauricio"
    },
    {
        id: "0a576b7c-deb4-4c9f-bf9a-77d485e83bdd",
        firstName: "Jonay",
        lastName: "Lopez"
    },
    {
        id: "b944448c-1f17-4f75-bb33-d0c815536fdd",
        firstName: "Abraham",
        lastName: "Romero"
    },
    {
        id: "0dad23ea-ef58-4b96-a6f1-58a2f7ef73ab",
        firstName: "Victor",
        lastName: "Perera"
    }
]

export const mockUserVicente = mockUsers[0]
export const mockUserJonay = mockUsers[1]
export const mockUserAbraham = mockUsers[2]
export const mockUserVictor = mockUsers[3]

export const mockMainUser = mockUserVicente
