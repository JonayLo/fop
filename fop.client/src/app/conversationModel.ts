import {ConversationMessageModel} from './conversationMessageModel';
import {UserModel} from './userModel';

export class ConversationModel {

    private id: string;
    private lastMessage: ConversationMessageModel;
    private ownerUserId: number;
    private user: UserModel;

    public static  buildFromResponse(conversationList) {
        return conversationList.map(conversation => new ConversationModel(conversation.id, conversation.user, conversation.lastMessage, conversation.ownerUserId));
    }

    constructor(id, user, lastMessage, ownerUserId) {
        this.id = id;
        this.user = new UserModel(user.id, user.firstName, user.lastName);
        this.lastMessage = ConversationMessageModel.buildFromSingleResponse(lastMessage);
        this.ownerUserId = ownerUserId;
    }

}
