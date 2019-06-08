import {ConversationMessageModel} from './conversationMessageModel';

export class ConversationModel {

    private id: string;
    private user: string;
    private conversationMessage: ConversationMessageModel;

    public static  buildFromResponse(conversationList) {
        return conversationList.map(conversation => new ConversationModel(conversation.id, conversation.name, conversation.conversationMessage));
    }

    constructor(id, user, conversationMessage) {
        this.id = id;
        this.user = user;
        this.conversationMessage = ConversationMessageModel.buildFromSingleResponse(conversationMessage);
    }

}
