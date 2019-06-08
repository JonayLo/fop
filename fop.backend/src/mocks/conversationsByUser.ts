import {UserConversation} from "../DTOs/UserConversation";
import uuid = require("uuid");
import {mockUserAbraham, mockUserJonay, mockUserVicente, mockUserVictor} from "./users";

export const mockConversationsByUser: UserConversation[] = [
    {
        id: "bc1853d3-fa02-4c2a-ba52-340c43601ca7",
        ownerUserId: mockUserVicente.id,
        user: mockUserJonay,
        lastMessage: {
            id: uuid.v4(),
            conversationId: "bc1853d3-fa02-4c2a-ba52-340c43601ca7",
            writerId: mockUserVicente.id,
            text: "Hola, qué material vas a llevar?",
            date: new Date()
        }
    },
    {
        id: "40d42f4e-e6ac-4e21-bc30-62c10afc38d6",
        ownerUserId: mockUserVicente.id,
        user: mockUserAbraham,
        lastMessage: {
            id: uuid.v4(),
            conversationId: "40d42f4e-e6ac-4e21-bc30-62c10afc38d6",
            writerId: mockUserAbraham.id,
            text: "Vale, yo iré más tarde",
            date: new Date()
        }
    },
    {
        id: "44c91d37-1d0e-49ec-8b7c-3f9f11d0bbd7",
        ownerUserId: mockUserVicente.id,
        user: mockUserVictor,
        lastMessage: {
            id: uuid.v4(),
            conversationId: "44c91d37-1d0e-49ec-8b7c-3f9f11d0bbd7",
            writerId: mockUserVicente.id,
            text: "Hoy voy a Patalavaca a recoger con unos amigos, te vienes?",
            date: new Date()
        }
    }
]
