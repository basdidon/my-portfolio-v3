export const responseMap = {
    Success: { isSuccess: true, statusCode: 200 },
    Created: { isSuccess: true, statusCode: 201 },
    Accepted: { isSuccess: true, statusCode: 202 },
    NoContent: { isSuccess: true, statusCode: 204 },
    BadRequest: { isSuccess: false, statusCode: 400 },
    Unauthorized: { isSuccess: false, statusCode: 401 },
    Forbidden: { isSuccess: false, statusCode: 403 },
    NotFound: { isSuccess: false, statusCode: 404 },
    Conflict: { isSuccess: false, statusCode: 409 },
    Gone: { isSuccess: false, statusCode: 410 },
};

export interface HttpResponse {
    reasonPhrase: keyof typeof responseMap;
}
