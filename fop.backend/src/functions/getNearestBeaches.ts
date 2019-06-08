import { APIGatewayEvent, Context, Handler, Callback } from "aws-lambda"
import {mockBeaches} from "../mocks/beaches";
import {buildResponse} from "../helpers/responseHelper";

export const handler: Handler = (
    _event: APIGatewayEvent,
    context: Context,
    callback: Callback
) => {

    context.callbackWaitsForEmptyEventLoop = false

    const response = buildResponse(200, mockBeaches)

    callback(null, response)
}
