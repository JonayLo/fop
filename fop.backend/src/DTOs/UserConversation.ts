import {User} from "../models/User";
import {Message} from "../models/Message";

export interface UserConversation {
    id: string;
    ownerUserId: string;
    user: User;
    lastMessage: Message;
}