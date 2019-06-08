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

    if (event.pathParameters && event.pathParameters.beachId) {
        const beachId = event.pathParameters.beachId

        response = buildResponse(
            200,
            CleaningEventService.getInstance().getBeachCleaningEvents(beachId)
        )
    } else {
        response = buildResponse(
            400,
            {
                message: "beachId was not provided"
            }
        )
    }

    callback(null, response)
}
