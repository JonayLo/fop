import {User} from "../models/User";

export const mockUsers: User[] = [
    {
        id: "adc91d90-fbf6-436f-81d7-2df43f159933",
        firstName: "Vicente",
        lastName: "Mauricio",
        email: "vicente@fop.com",
        password: "9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08",
        avatarUrl: "https://fop-default-images-bucket-dev.s3.amazonaws.com/users-images/man-1.png"
    },
    {
        id: "0a576b7c-deb4-4c9f-bf9a-77d485e83bdd",
        firstName: "Jonay",
        lastName: "Lopez",
        email: "jonay@fop.com",
        password: "9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08",
        avatarUrl: "https://fop-default-images-bucket-dev.s3.amazonaws.com/users-images/man-2.png"
    },
    {
        id: "b944448c-1f17-4f75-bb33-d0c815536fdd",
        firstName: "Abraham",
        lastName: "Romero",
        email: "abraham@fop.com",
        password: "9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08",
        avatarUrl: "https://fop-default-images-bucket-dev.s3.amazonaws.com/users-images/man.png"
    },
    {
        id: "0dad23ea-ef58-4b96-a6f1-58a2f7ef73ab",
        firstName: "Victor",
        lastName: "Perera",
        email: "victor@fop.com",
        password: "9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08",
        avatarUrl: "https://fop-default-images-bucket-dev.s3.amazonaws.com/users-images/man-3.png"
    }
]

export const mockUserVicente = mockUsers[0]
export const mockUserJonay = mockUsers[1]
export const mockUserAbraham = mockUsers[2]
export const mockUserVictor = mockUsers[3]

export const mockMainUser = mockUserVicente
