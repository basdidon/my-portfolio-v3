interface RequestParameter {
    parameterName: string;
    source: "JsonBody" | "RouteParameter" | "QueryParameter" | "Claims" | "Header";
    type: "int" | "Guid" | "string" | "decimal";
    required: boolean;
    defaultValue: string | number;
    description: string;
}

interface Behavior
{
    
}

interface ApiDisplay {
    method: "GET" | "POST" | "PUT" | "DELETE";
    path: string;
    requestParameters: RequestParameter[];
    behaviors:
}
