import { APIGatewayEvent, Context, Handler, Callback } from "aws-lambda"
import {buildResponse} from "../helpers/responseHelper";
import {CleaningEventService} from "../services/cleaningEvent.service";

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
            CleaningEventService.getInstance().getUserCleaningEvents(userId)
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
