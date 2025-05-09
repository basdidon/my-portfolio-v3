import { responseMap } from "@/const/HttpResponses";
import ResponsePill from "./ResponsePill";

interface RequestParameter {
    parameterName: string;
    source: "JsonBody" | "RouteParameter" | "QueryParameter" | "Claims" | "Header";
    type: "int" | "Guid" | "string" | "decimal";
    required: boolean;
    defaultValue?: string | number;
    description: string;
}

interface Behavior {
    condition: string;
    response: keyof typeof responseMap;
    note?: string;
}

const httpMethodTextColorMap = {
    GET: "text-green-500",
    POST: "text-yellow-400",
    PUT: "text-blue-400",
    DELETE: "text-red-500",
};

export interface ApiDisplayProps {
    method: keyof typeof httpMethodTextColorMap;
    path: string;
    requestParameters: RequestParameter[];
    roleBehaviors: Record<string, Behavior[]>;
}

const ApiDisplay = ({ method, path, requestParameters, roleBehaviors }: ApiDisplayProps) => {
    return (
        <>
            <div id={method + ":" + path} className="mt-8 mb-2 py-2">
                <h3 className=" md:text-xl">
                    <span className={`font-bold ${httpMethodTextColorMap[method]}`}>{method}</span>
                    &ensp;
                    {path.split(/(\{[^}]+\})/g).map((segment, index) =>
                        segment.match(/^\{[^}]+\}$/) ? (
                            <span key={index} className="text-blue-500">
                                {segment}
                            </span>
                        ) : (
                            <span key={index}>{segment}</span>
                        )
                    )}
                </h3>
                {requestParameters.length > 0 && (
                    <div className="md:px-4">
                        <h4 className="text-sm md:text-lg font-bold mt-4 mb-2">
                            Request Parameters
                        </h4>
                        <div className="py-2 overflow-x-auto scrollbar-hide">
                            <table className="w-full text-left border-collapse border-spacing-x-4 bg-zinc-600 rounded-xl overflow-hidden">
                                <thead className="bg-zinc-700 text-sm md:text-base">
                                    <tr>
                                        <th className="py-3 px-5 w-48">Parameter</th>
                                        <th className="py-3 px-2 w-36">Source</th>
                                        <th className="py-3 px-2 text-center w-12">Type</th>
                                        <th className="py-3 px-2 text-center w-24">Required</th>
                                        <th className="py-3 px-2 text-center w-24">Default</th>
                                        <th className="py-3 px-2">Desciption</th>
                                    </tr>
                                </thead>
                                <tbody className="text-xs md:text-sm">
                                    {requestParameters.map((x, idx) => (
                                        <tr
                                            key={idx}
                                            className="[&:not(:last-child)]:border-b border-gray-200 whitespace-nowrap"
                                        >
                                            <td className="py-3 px-5 w-36">{x.parameterName}</td>
                                            <td className="py-3 px-2">{x.source}</td>
                                            <td className="py-3 px-2 text-center">{x.type}</td>
                                            <td className="py-3 px-2 text-center">
                                                {x.required ? "Yes" : "No"}
                                            </td>
                                            <td className="py-3 px-2 text-center">
                                                {x.defaultValue ?? "-"}
                                            </td>
                                            <td className="py-3 px-2">{x.description}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
                {Object.keys(roleBehaviors).length > 0 && (
                    <div className="md:px-4">
                        <h4 className="text-sm md:text-lg font-bold mt-4 mb-2">API Behaviors</h4>
                        <div className="py-2 overflow-x-auto scrollbar-hide">
                            <table className="w-full text-left border-collapse border-spacing-x-4 bg-zinc-600 rounded-xl overflow-hidden">
                                <thead className="bg-zinc-700 text-sm md:text-base">
                                    <tr>
                                        <th className="py-3 px-2 text-center">Role</th>
                                        <th className="py-3 px-2">Condition</th>
                                        <th className="py-3 px-2">Response</th>
                                        {Object.values(roleBehaviors).some((x) =>
                                            x.some((x) => x.note)
                                        ) && <th className="py-3 px-2">Note</th>}
                                    </tr>
                                </thead>
                                <tbody className="text-xs md:text-sm">
                                    {Object.entries(roleBehaviors).map(([role, rows]) =>
                                        rows.map((row, idx) => (
                                            <tr
                                                key={`${role}-${idx}`}
                                                className="[&:not(:last-child)]:border-b border-gray-200 whitespace-nowrap"
                                            >
                                                {idx === 0 && (
                                                    <th
                                                        scope="row"
                                                        className="w-60 text-sm md:text-base py-3 px-4 text-center"
                                                        rowSpan={rows.length}
                                                    >
                                                        {role}
                                                    </th>
                                                )}
                                                <td className="py-3 px-2">{row.condition}</td>
                                                <td className="py-3 px-2">
                                                    <ResponsePill reasonPhrase={row.response} />
                                                </td>
                                                {row.note && (
                                                    <td className="py-3 px-2">{row.note}</td>
                                                )}
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default ApiDisplay;
