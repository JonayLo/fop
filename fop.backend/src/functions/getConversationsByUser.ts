import { APIGatewayEvent, Context, Handler, Callback } from "aws-lambda"
import {buildResponse} from "../helpers/responseHelper";
import {mockConversationsByUser} from "../mocks/conversationsByUser";

export const handler: Handler = (
    event: APIGatewayEvent,
    context: Context,
    callback: Callback
) => {

    context.callbackWaitsForEmptyEventLoop = false

    let response

    if (event.pathParameters && event.pathParameters.userId) {
        const userId = event.pathParameters.userId

        response = buildResponse(
            200,
            mockConversationsByUser.filter(
                conversation => conversation.ownerUserId === userId
            )
        )
    } else {
        response = buildResponse(
            400,
            {
                message: "userId was not provided"
            }
        )
    }

    callback(null, response)
}
