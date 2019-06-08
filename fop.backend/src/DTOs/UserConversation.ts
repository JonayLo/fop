import {UserOnlyName} from "./UserOnlyName";
import {Message} from "../models/Message";

export interface UserConversation {
    id: string;
    ownerUserId: string;
    user: UserOnlyName;
    lastMessage: Message;
}