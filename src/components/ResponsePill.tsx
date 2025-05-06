const responseMap = {
    Success: { isSuccess: true, code: 200 },
    Created: { isSuccess: true, code: 201 },
    Accepted: { isSuccess: true, code: 202 },
    NoContent: { isSuccess: true, code: 204 },
    BadRequest: { isSuccess: false, code: 400 },
    Unauthorized: { isSuccess: false, code: 401 },
    Forbidden: { isSuccess: false, code: 403 },
    NotFound: { isSuccess: false, code: 404 },
    Conflict: { isSuccess: false, code: 409 },
};

interface ResponsePillPropss {
    value: keyof typeof responseMap;
}
const ResponsePill = ({ value }: ResponsePillPropss) => {
    const { isSuccess, code } = responseMap[value];
    const bgColor = isSuccess ? "bg-green-500" : "bg-red-500";

    return (
        <span className={`px-3 py-1 rounded-full text-white ${bgColor}`}>
            {code}&emsp;{value}
        </span>
    );
};

export default ResponsePill;
