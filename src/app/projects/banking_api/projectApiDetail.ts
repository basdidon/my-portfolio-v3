import { ApiDisplayProps } from "@/components/ApiDisplay";

type ApiDetails = ApiDisplayProps & {
    description?: string;
};

const projectApiDetails: ApiDetails[] = [
    {
        method: "GET",
        path: "/accounts",
        description: "List accounts",
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
        description: "Create a new account",
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
        description: "Get account by ID",
        requestParameters: [
            {
                parameterName: "userId",
                source: "Claims",
                type: "Guid",
                required: true,
                description: "user who send this request",
            },
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
        method: "GET",
        path: "/accounts/{accountId}/transactions",
        description: "Query all transactions by specific account",
        requestParameters: [
            {
                parameterName: "userId",
                source: "Claims",
                type: "Guid",
                required: true,
                description: "user who send this request",
            },
            {
                parameterName: "accountId",
                source: "RouteParameter",
                type: "Guid",
                required: true,
                description: "",
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
        description: "Deposit funds",
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
        description: "Initiate withdrawal (pending state)",
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
                description: "withdraw amount",
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
        description: "Confirm withdrawal",
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
                    condition: "Account was not found",
                    response: "NotFound",
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
    {
        method: "POST",
        path: "/accounts/{sourceAccountId}/transfer",
        description: "Transfer funds",
        requestParameters: [
            {
                parameterName: "sourceAccountId",
                source: "RouteParameter",
                type: "Guid",
                required: true,
                description: "The account from which funds will be transferred",
            },
            {
                parameterName: "userId",
                source: "Claims",
                type: "Guid",
                required: true,
                description: "The user initiating the transfer",
            },
            {
                parameterName: "destinationAccountId",
                source: "JsonBody",
                type: "Guid",
                required: true,
                description: "The account receiving the funds",
            },
            {
                parameterName: "amount",
                source: "JsonBody",
                type: "decimal",
                required: true,
                description: "The amount of money to transfer",
            },
        ],
        roleBehaviors: {
            Customer: [
                {
                    condition: "source account or destination account is notfound",
                    response: "NotFound",
                },
                {
                    condition: "source account not belong to current user",
                    response: "Forbidden",
                },
                { condition: "Insufficient fund", response: "BadRequest" },
                {
                    condition: "source account or destination account is frozen",
                    response: "Forbidden",
                },
                {
                    condition: "Default",
                    response: "Success",
                },
            ],
            "Teller or Admin": [
                {
                    condition: "Default",
                    response: "Forbidden",
                },
            ],
        },
    },
    {
        method: "POST",
        path: "/accounts/{accountId}/freeze",
        description: "Freeze the account",
        requestParameters: [
            {
                parameterName: "accountId",
                source: "RouteParameter",
                type: "Guid",
                required: true,
                description: "The account will be freeze",
            },
            {
                parameterName: "userId",
                source: "Claims",
                type: "Guid",
                required: true,
                description: "The user who send this request",
            },
        ],
        roleBehaviors: {
            "Customer or Teller": [
                {
                    condition: "Default",
                    response: "Forbidden",
                },
            ],
            Admin: [
                {
                    condition: "Account was not found",
                    response: "NotFound",
                },
                {
                    condition: "The account has already been frozen",
                    response: "Conflict",
                },
                {
                    condition: "Default",
                    response: "NoContent",
                },
            ],
        },
    },
    {
        method: "POST",
        path: "/accounts/{accountId}/unfreeze",
        description: "Unfreeze the account",
        requestParameters: [
            {
                parameterName: "accountId",
                source: "RouteParameter",
                type: "Guid",
                required: true,
                description: "The account will be unfreeze",
            },
            {
                parameterName: "userId",
                source: "Claims",
                type: "Guid",
                required: true,
                description: "The user who send this request",
            },
        ],
        roleBehaviors: {
            "Customer or Teller": [
                {
                    condition: "Default",
                    response: "Forbidden",
                },
            ],
            Admin: [
                {
                    condition: "Account was not found",
                    response: "NotFound",
                },
                {
                    condition: "The account hasn't been frozen yet",
                    response: "Conflict",
                },
                {
                    condition: "Default",
                    response: "NoContent",
                },
            ],
        },
    },
];

export { projectApiDetails };
