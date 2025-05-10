"use client";

import ApiDisplay, { ApiDisplayProps } from "@/components/ApiDisplay";
import PrismGist from "@/components/PrismGist";
import ProjectPage from "@/components/ProjectPage";

type ApiDetails = ApiDisplayProps & {
    description?: string;
};

const apis: ApiDetails[] = [
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

const BankingApiPage = () => {
    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <>
            <ProjectPage title="Banking API" githubUrl="https://github.com/basdidon/EventSourcing">
                <p>
                    &emsp;This project is a clean, modular Banking API built with FastEndpoints,
                    following the REPR pattern (Request, Endpoint, Response) — a modern, streamlined
                    alternative to traditional MVC architecture. The API emphasizes clear separation
                    of concerns and lightweight endpoint definition. It features role-based access
                    control with three roles:
                </p>
                <ul className="list-disc list-inside my-2">
                    <li>
                        <span className="font-bold">Customer</span> – for account holders
                    </li>
                    <li>
                        <span className="font-bold">Teller</span> – for handling transactions
                    </li>
                    <li>
                        <span className="font-bold">Admin</span> – for managing accounts and
                        system-level operations
                    </li>
                </ul>
                <p>
                    &emsp;The backend is powered by Event Sourcing, implemented with MartenDb,
                    providing full traceability and consistency through immutable event logs.
                </p>
                {/* Bank Account */}
                <h2 className="text-2xl mt-8 mb-2 font-bold">BankAccount</h2>
                <div className="md:px-2">
                    <h3 className="text-xl mt-4 mb-2 font-bold px-4">BankAccount.cs</h3>
                    <div className="mt-2 md:px-4">
                        <PrismGist
                            codeLang="CSharp"
                            gistRawFileUrl="https://gist.githubusercontent.com/basdidon/69f8c2f00ff92a9a19f2892941db6174/raw/5a82b8b2e360fa76c08534317f25ab1a2069c8fb/BankAccount.cs"
                        />
                    </div>
                    <p>
                        &emsp;This file defines the read model for a bank account. The BankAccount
                        class represents the current state of a user's bank account. Key properties
                        include:
                    </p>
                    <ul className=" list-inside list-disc mt-2">
                        <li>
                            <span className=" font-bold text-yellow-300">Id : </span>Unique
                            identifier for the account (likely assigned by the event stream).
                        </li>
                        <li>
                            <span className=" font-bold text-yellow-300">OwnerId : </span>The user
                            who owns the account.
                        </li>
                        <li>
                            <span className=" font-bold text-yellow-300">AccountNumber : </span>
                            Human-readable identifier for the account (e.g., "123-456789-0").
                        </li>
                        <li>
                            <span className=" font-bold text-yellow-300">Balance : </span>
                            Current balance of the account.
                        </li>
                        <li>
                            <span className=" font-bold text-yellow-300">IsFrozen : </span>
                            Boolean flag indicating whether the account is frozen.
                        </li>
                    </ul>
                    <h3 className="text-xl mt-4 mb-2 font-bold px-4">Events</h3>
                    <p>
                        These immutable event records represent actions that occur over time. They
                        include:
                    </p>
                    <ul className=" list-inside list-disc my-2 space-y-2">
                        <li>
                            <span className="bg-zinc-700 py-1 px-2 rounded-md m-1">
                                AccountCreated
                            </span>
                            : Fired when an account is opened.
                        </li>
                        <li>
                            <span className="bg-zinc-700 py-1 px-2 rounded-md m-1">
                                MoneyDeposit
                            </span>
                            ,
                            <span className="bg-zinc-700 py-1 px-2 rrounded-md m-1">
                                MoneyWithdraw
                            </span>
                            : For deposit and withdrawal operations.
                        </li>
                        <li>
                            <span className="bg-zinc-700 py-1 px-2 rounded-md m-1">MoneySent</span>,
                            <span className="bg-zinc-700 py-1 px-2 rounded-md m-1">
                                MoneyRecieved
                            </span>
                            : For transferring money between accounts.
                        </li>
                        <li>
                            <span className="bg-zinc-700 py-1 px-2 rounded-md m-1">
                                AccountFrozen
                            </span>
                            ,
                            <span className="bg-zinc-700 py-1 px-2 rounded-md m-1">
                                AccountUnfrozen
                            </span>
                            : Change the account's status.
                        </li>
                        <li>
                            <span className="bg-zinc-700 py-1 px-2 rounded-md m-1">
                                AccountClosed
                            </span>
                            : Indicates that the account has been terminated.
                        </li>
                    </ul>
                    <div className="md:px-4">
                        <PrismGist
                            codeLang="CSharp"
                            gistRawFileUrl="https://gist.githubusercontent.com/basdidon/69f8c2f00ff92a9a19f2892941db6174/raw/5a82b8b2e360fa76c08534317f25ab1a2069c8fb/events.cs"
                        />
                    </div>
                    <h3 className="text-xl mt-4 mb-2 font-bold px-4">BankAccountProjection.cs</h3>
                    <div className="md:px-4">
                        <PrismGist
                            codeLang="CSharp"
                            gistRawFileUrl="https://gist.githubusercontent.com/basdidon/69f8c2f00ff92a9a19f2892941db6174/raw/e63f8ba016410fc9adcb69a7e28aef216a346a11/BankAccountProjection.cs"
                        />
                    </div>
                    <p>
                        This class maps events to changes in the BankAccount state using Marten's
                        SingleStreamProjection&lt;T&gt;
                    </p>
                </div>
                {/* Withdrawal */}
                <h2 className="text-2xl mt-8 mb-2 font-bold">Withdrawal</h2>
                <p>
                    &emsp;To prevent a Teller or Admin from arbitrarily withdrawing funds from an
                    account owned by a regular user, additional logic is required. When a user
                    intends to make a withdrawal, they must inform the Teller, who then sends a
                    withdrawal request to the server. The server generates and sends a One-Time
                    Password (OTP) to the user. The user provides the OTP to the Teller, who then
                    submits a withdrawal confirmation request to complete the process.
                </p>
                <h2 className="text-lg md:text-2xl mt-8 mb-2 font-bold">Endpoints :</h2>
                <div className="md:px-4 overflow-x-auto scrollbar-hide w-full">
                    <table className="table-auto w-full text-left text-sm md:text-base px-4 border-collapse border-spacing-x-4 bg-zinc-600 rounded-xl overflow-hidden">
                        <thead className="bg-zinc-700">
                            <tr>
                                <th className="py-2 px-5">Method</th>
                                <th className="py-2 px-5">Endpoint</th>
                                <th className="py-2 px-5">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {apis.map((x) => {
                                const methodTextColor =
                                    x.method === "GET"
                                        ? "text-green-400"
                                        : x.method === "POST"
                                        ? "text-yellow-400"
                                        : "text-gray-400";
                                return (
                                    <tr
                                        key={x.method + x.path}
                                        className="hover:bg-zinc-500  whitespace-nowrap text-xs md:text-sm"
                                        onClick={() => scrollToSection(x.method + ":" + x.path)}
                                        style={{ cursor: "pointer" }}
                                    >
                                        <td className={`py-2 px-5 font-bold ${methodTextColor}`}>
                                            {x.method}
                                        </td>
                                        <td className="py-2 px-5">
                                            {x.path.split(/(\{[^}]+\})/g).map((segment, index) =>
                                                segment.match(/^\{[^}]+\}$/) ? (
                                                    <span key={index} className="text-blue-400">
                                                        {segment}
                                                    </span>
                                                ) : (
                                                    <span key={index}>{segment}</span>
                                                )
                                            )}
                                        </td>
                                        <td className="py-2 px-5">{x.description}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>

                {apis.map((x, idx) => (
                    <ApiDisplay key={idx} {...x} />
                ))}
            </ProjectPage>
        </>
    );
};

export default BankingApiPage;
