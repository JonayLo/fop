import { APIGatewayEvent, Context, Handler, Callback } from "aws-lambda"
import {buildResponse} from "../helpers/responseHelper";
import {mockMainUser} from "../mocks/users";

export const handler: Handler = (
    _event: APIGatewayEvent,
    context: Context,
    callback: Callback
) => {

    context.callbackWaitsForEmptyEventLoop = false

    const response = buildResponse(200, mockMainUser)

    callback(null, response)
}
