import { HttpResponse, responseMap } from "@/const/HttpResponses";

interface ResponsePillPropss extends HttpResponse {}
const ResponsePill = ({ reasonPhrase }: ResponsePillPropss) => {
    const { isSuccess, statusCode } = responseMap[reasonPhrase];
    const bgColor = isSuccess ? "bg-green-500" : "bg-red-500";

    return (
        <span className={`px-3 py-1 rounded-full text-white ${bgColor}`}>
            {statusCode}&emsp;{reasonPhrase}
        </span>
    );
};

export default ResponsePill;
