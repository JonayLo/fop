
export class ConversationMessageModel {

    private id: string;
    private conversationId: string;
    private text: string;
    private date: string;

    public static  buildFromResponse(messagesList) {
        return messagesList.map(messages => new ConversationMessageModel(messages.id, messages.conversationId, messages.text, messages.date));
    }

    public static buildFromSingleResponse(conversationMessage) {
        return new ConversationMessageModel(conversationMessage.id, conversationMessage.conversationId, conversationMessage.text, conversationMessage.date);
    }

    constructor(id, conversationId, text, date) {
        this.id = id;
        this.conversationId = conversationId;
        this.text = text;
        this.date = date;
    }

}
