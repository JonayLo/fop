export const buildResponse = (
    statusCode: Number,
    body: {}
) => {
    return {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true,
            "Content-Type": "application/json"
        },
        statusCode: statusCode,
        body: JSON.stringify(body)
    }
}
