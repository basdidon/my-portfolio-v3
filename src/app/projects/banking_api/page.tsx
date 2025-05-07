import ApiDisplay, { ApiDisplayProps } from "@/components/ApiDisplay";
import ProjectPage from "@/components/ProjectPage";

const apis: ApiDisplayProps[] = [
    {
        method: "GET",
        path: "/accounts",
        requestParameters: [
            {
                parameterName: "userId",
                source: "Claims",
                type: "Guid",
                required: true,
                description: "Represent user who send this request",
            },
            {
                parameterName: "ownerId",
                source: "QueryParameter",
                type: "Guid",
                required: false,
                description: "For Teller and Admin to List accounts that owned by specific user",
            },
            {
                parameterName: "page",
                source: "QueryParameter",
                type: "int",
                required: false,
                defaultValue: 1,
                description: "Page number",
            },
            {
                parameterName: "pageSize",
                source: "QueryParameter",
                type: "int",
                required: false,
                defaultValue: 20,
                description: "Number of items per page",
            },
        ],
        roleBehaviors: {
            Customer: [
                {
                    condition: "Provided ownerId",
                    response: "Forbidden",
                    note: "customer cannot access other's accounts",
                },
                {
                    condition: "Not provided ownerId",
                    response: "Success",
                    note: "Return items owned by the current user",
                },
            ],
            "Teller or Admin": [
                {
                    condition: "Provided ownerId",
                    response: "Success",
                    note: "Return accounts owned by that user",
                },
                {
                    condition: "Not provided ownerId",
                    response: "Success",
                    note: "Return all accounts",
                },
            ],
        },
    },
    {
        method: "POST",
        path: "/accounts",
        requestParameters: [
            {
                parameterName: "userId",
                source: "Claims",
                type: "Guid",
                required: true,
                description: "Represent user who send this request",
            },
            {
                parameterName: "CustomerId",
                source: "JsonBody",
                type: "Guid",
                required: true,
                description: "OwnerId of this account",
            },
            {
                parameterName: "initialBalance",
                source: "JsonBody",
                type: "decimal",
                required: false,
                defaultValue: 0,
                description: "initial balance of this account",
            },
        ],
        roleBehaviors: {
            Customer: [
                {
                    condition: "Default",
                    response: "Forbidden",
                },
            ],
            "Teller or Admin": [
                {
                    condition: "User is not exists",
                    response: "NotFound",
                },
                {
                    condition: "CustomerId is not in customer role",
                    response: "BadRequest",
                    note: "Cannot create account for non customer role",
                },
                {
                    condition: "InitialBalance less than 0",
                    response: "BadRequest",
                    note: "InitialBalance must greater than or equal to 0",
                },
                {
                    condition: "Default",
                    response: "Success",
                },
            ],
        },
    },
    {
        method: "GET",
        path: "/accounts/{accountId}",
        requestParameters: [
            {
                parameterName: "accountId",
                source: "RouteParameter",
                type: "Guid",
                required: true,
                description: "",
            },
        ],
        roleBehaviors: {
            Customer: [
                {
                    condition: "Account not exists",
                    response: "NotFound",
                },
                {
                    condition: "Account not owned by current user",
                    response: "Forbidden",
                },
                {
                    condition: "Default",
                    response: "Success",
                },
            ],
            "Teller or Admin": [
                {
                    condition: "Account not exists",
                    response: "NotFound",
                },
                {
                    condition: "Default",
                    response: "Success",
                },
            ],
        },
    },
    {
        method: "POST",
        path: "/accounts/{accountId}/deposit",
        requestParameters: [
            {
                parameterName: "accountId",
                source: "RouteParameter",
                type: "Guid",
                required: true,
                description: "process account",
            },
            {
                parameterName: "userId",
                source: "Claims",
                type: "Guid",
                required: true,
                description: "user who send this request",
            },
            {
                parameterName: "amount",
                source: "JsonBody",
                type: "decimal",
                required: true,
                description: "deposit amount",
            },
        ],
        roleBehaviors: {
            Customer: [
                {
                    condition: "Default",
                    response: "Forbidden",
                },
            ],
            "Teller or Admin": [
                {
                    condition: "Account not exists",
                    response: "NotFound",
                },
                {
                    condition: "Amount is less than or equal 0",
                    response: "BadRequest",
                },
                {
                    condition: "Account is frozen",
                    response: "Forbidden",
                },
                {
                    condition: "Default",
                    response: "Success",
                },
            ],
        },
    },
    {
        method: "POST",
        path: "/accounts/{accountId}/withdraw",
        requestParameters: [
            {
                parameterName: "accountId",
                source: "RouteParameter",
                type: "Guid",
                required: true,
                description: "process account",
            },
            {
                parameterName: "userId",
                source: "Claims",
                type: "Guid",
                required: true,
                description: "user who send this request",
            },
            {
                parameterName: "amount",
                source: "JsonBody",
                type: "decimal",
                required: true,
                description: "deposit amount",
            },
        ],
        roleBehaviors: {
            Customer: [
                {
                    condition: "Default",
                    response: "Forbidden",
                },
            ],
            "Teller or Admin": [
                {
                    condition: "Account not exists",
                    response: "NotFound",
                },
                {
                    condition: "Amount is less than or equal 0",
                    response: "BadRequest",
                },
                {
                    condition: "Account is frozen",
                    response: "Forbidden",
                },
                {
                    condition: "Default",
                    response: "Success",
                },
            ],
        },
    },
    {
        method: "POST",
        path: "/withdrawal/{requestId}/confirm",
        requestParameters: [
            {
                parameterName: "requestId",
                source: "RouteParameter",
                type: "Guid",
                required: true,
                description: "withdraw request id",
            },
            {
                parameterName: "userId",
                source: "Claims",
                type: "Guid",
                required: true,
                description: "user who send this request",
            },
            {
                parameterName: "otp",
                source: "JsonBody",
                type: "string",
                required: true,
                description: "one time password that sent to customer",
            },
        ],
        roleBehaviors: {
            Customer: [
                {
                    condition: "Default",
                    response: "Forbidden",
                },
            ],
            "Teller or Admin": [
                {
                    condition: "Withdraw request not exists",
                    response: "NotFound",
                },
                {
                    condition: "Withdraw request is revocked",
                    response: "Gone",
                },
                {
                    condition: "Withdraw request is already process",
                    response: "Conflict",
                },
                {
                    condition: "Withdraw request has expired",
                    response: "Gone",
                },
                {
                    condition: "Retry attempts exceeded",
                    response: "Forbidden",
                },
                {
                    condition: "Provided mismatch OTP",
                    response: "BadRequest",
                },
                {
                    condition: "Account not found",
                    response: "NoContent",
                },
                {
                    condition: "Account is frozen",
                    response: "Forbidden",
                },
                { condition: "Insufficient fund", response: "Forbidden" },
                {
                    condition: "Default",
                    response: "Success",
                },
            ],
        },
    },
];

const BankingApiPage = () => {
    return (
        <>
            <ProjectPage title="Banking API" githubUrl="https://github.com/basdidon/EventSourcing">
                <p>
                    &emsp;In this exciting slot machine game, players can test their luck and skill
                    in a classic casino-style experience. The gameplay is simple and engaging:
                </p>
                {apis.map((x) => (
                    <ApiDisplay {...x} />
                ))}
            </ProjectPage>
        </>
    );
};

export default BankingApiPage;
