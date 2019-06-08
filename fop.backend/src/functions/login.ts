import { APIGatewayEvent, Context, Handler, Callback } from "aws-lambda"
import {buildResponse} from "../helpers/responseHelper";
import {AuthenticationService} from "../services/authentication.service";

export const handler: Handler = (
    event: APIGatewayEvent,
    context: Context,
    callback: Callback
) => {

    context.callbackWaitsForEmptyEventLoop = false

    let response
    if (event.body) {
        const request = JSON.parse(event.body)
        if (request.email && request.password) {
            const loginUser = AuthenticationService.getInstance().login(request.email, request.password)

            if (loginUser) {
                response = buildResponse(200, loginUser)
            } else {
                response = buildResponse(401, { message: "Wrong email or password"})
            }
            callback(null, response)
        }
    }

    response = buildResponse(400, { message: "Missing email or password"})
    callback(null, response)
}
