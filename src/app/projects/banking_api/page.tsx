import ProjectPage from "@/components/ProjectPage";
import ResponsePill from "@/components/ResponsePill";

type Behavior = {
    role: string;
    ProvidedOwnerId: boolean;
    IsAllowed: boolean;
    returnedItems: string;
};
const accountsApiBehavior: Behavior[] = [
    {
        role: "Customer",
        ProvidedOwnerId: false,
        IsAllowed: true,
        returnedItems: "Items owned by the current user",
    },
    {
        role: "Customer",
        ProvidedOwnerId: true,
        IsAllowed: false,
        returnedItems: "❌ Nothing / 403 Forbidden",
    },
    {
        role: "Teller",
        ProvidedOwnerId: false,
        IsAllowed: true,
        returnedItems: "All items",
    },
    {
        role: "Teller",
        ProvidedOwnerId: true,
        IsAllowed: true,
        returnedItems: "Items owned by that user",
    },
    {
        role: "Admin",
        ProvidedOwnerId: false,
        IsAllowed: true,
        returnedItems: "All items",
    },
    {
        role: "Admin",
        ProvidedOwnerId: true,
        IsAllowed: true,
        returnedItems: "Items owned by that user",
    },
];

const BankingApiPage = () => {
    // Group data by role
    const grouped: Record<string, Behavior[]> = {};
    accountsApiBehavior.forEach((entry) => {
        if (!grouped[entry.role]) grouped[entry.role] = [];
        grouped[entry.role].push(entry);
    });

    return (
        <>
            <ProjectPage title="Banking API" githubUrl="https://github.com/basdidon/EventSourcing">
                <p>
                    &emsp;In this exciting slot machine game, players can test their luck and skill
                    in a classic casino-style experience. The gameplay is simple and engaging:
                </p>
                {/* List Bank Accounts */}
                <h3 className="text-2xl  mt-12 mb-2">
                    <span className="font-bold text-green-500">GET</span>&emsp;/accounts
                </h3>
                <div className="px-8">
                    <h4 className="text-lg font-bold mt-4 mb-2">Request Parameters</h4>
                    <table className="w-full text-left border-collapse border-spacing-x-4 bg-zinc-600 rounded-xl overflow-hidden">
                        <thead className="bg-zinc-700">
                            <tr>
                                <th className="py-3 px-5">Parameter</th>
                                <th className="py-3 px-2">Source</th>
                                <th className="py-3 px-2 text-center">Type</th>
                                <th className="py-3 px-2 text-center">Required</th>
                                <th className="py-3 px-2 text-center">Default</th>
                                <th className="py-3 px-2">Desciption</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="[&:not(:last-child)]:border-b border-gray-200">
                                <td className="py-3 px-5">UserId</td>
                                <td className="py-3 px-2">Claims</td>
                                <td className="py-3 px-2 text-center">Guid</td>
                                <td className="py-3 px-2 text-center">Yes</td>
                                <td className="py-3 px-2 text-center">-</td>
                                <td className="py-3 px-2">Represent user who send this request</td>
                            </tr>
                            <tr className="[&:not(:last-child)]:border-b border-gray-200">
                                <td className="py-3 px-5">OwnerId</td>
                                <td className="py-3 px-2">Query Param</td>
                                <td className="py-3 px-2 text-center">Guid</td>
                                <td className="py-3 px-2 text-center">no</td>
                                <td className="py-3 px-2 text-center">-</td>
                                <td className="py-3 px-2">
                                    For Teller and Admin to List accounts that owned by specific
                                    user
                                </td>
                            </tr>
                            <tr className="[&:not(:last-child)]:border-b border-gray-200">
                                <td className="py-3 px-5">Page</td>
                                <td className="py-3 px-2">Query Param</td>
                                <td className="py-3 px-2 text-center">int</td>
                                <td className="py-3 px-2 text-center">no</td>
                                <td className="py-3 px-2 text-center">1</td>
                                <td className="py-3 px-2">Page number</td>
                            </tr>
                            <tr className="[&:not(:last-child)]:border-b border-gray-200">
                                <td className="py-3 px-5">PageSize</td>
                                <td className="py-3 px-2">Query Param</td>
                                <td className="py-3 px-2 text-center">int</td>
                                <td className="py-3 px-2 text-center">no</td>
                                <td className="py-3 px-2 text-center">20</td>
                                <td className="py-3 px-2">Number of items per page</td>
                            </tr>
                        </tbody>
                    </table>
                    <h4 className="text-lg font-bold mt-4 mb-2">API Behaviors</h4>
                    <table className="w-full text-left border-collapse border-spacing-x-4 bg-zinc-600 rounded-xl overflow-hidden">
                        <thead className="bg-zinc-700">
                            <tr>
                                <th className="py-3 px-2 text-center">Role</th>
                                <th className="py-3 px-2">
                                    Query Param
                                    <span className="text-sm ms-2 px-2 py-1 rounded-md bg-gray-600">
                                        ownerId
                                    </span>
                                </th>
                                <th className="py-3 px-2 text-center">Allowed?</th>
                                <th className="py-3 px-2">returnd items</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.entries(grouped).map(([role, rows]) =>
                                rows.map((row, idx) => (
                                    <tr
                                        key={`${role}-${idx}`}
                                        className="[&:not(:last-child)]:border-b border-gray-200"
                                    >
                                        {idx === 0 && (
                                            <th
                                                scope="row"
                                                className=" py-4 px-2 text-center"
                                                rowSpan={rows.length}
                                            >
                                                {role}
                                            </th>
                                        )}
                                        <td className="py-4 px-2">
                                            {row.ProvidedOwnerId ? "Provided" : "Not Provided"}
                                        </td>
                                        <td className="py-4 px-2 text-center">
                                            {row.IsAllowed ? "✅" : "🚫"}
                                        </td>
                                        <td className="py-4 px-2">{row.returnedItems}</td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Get Bank Account By Id */}
                <h3 className="text-lg  mt-8 mb-2">
                    <span className="font-bold text-green-500">GET</span> /accounts/
                    <span className="text-blue-500">{"{AccountId}"}</span>
                </h3>
                <table className="w-full mt-4 text-left border-collapse border-spacing-x-4 bg-zinc-600 rounded-xl overflow-hidden">
                    <thead className="bg-zinc-700">
                        <tr>
                            <th className="py-3 px-2 text-center">Role</th>
                            <th>Condition</th>
                            <th className="py-3 px-2">Response</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="[&:not(:last-child)]:border-b border-gray-200">
                            <th scope="row" className="py-4 px-2 text-center" rowSpan={3}>
                                Customer
                            </th>
                            <td>Account not exists</td>
                            <td className="py-3 px-2">
                                <ResponsePill value="NotFound" />
                            </td>
                        </tr>
                        <tr className="[&:not(:last-child)]:border-b border-gray-200">
                            <td>Not belong to current user</td>
                            <td className="py-3 px-2">
                                <ResponsePill value="Forbidden" />
                            </td>
                        </tr>
                        <tr className="[&:not(:last-child)]:border-b border-gray-200">
                            <td>Default</td>
                            <td className="py-3 px-2 ">
                                <ResponsePill value="Success" />
                            </td>
                        </tr>
                        <tr className="[&:not(:last-child)]:border-b border-gray-200">
                            <th scope="row" className="py-4 px-2 text-center" rowSpan={2}>
                                Teller
                            </th>
                            <td>Account not exists</td>
                            <td className="py-3 px-2 text-red-400">
                                <ResponsePill value="NotFound" />
                            </td>
                        </tr>

                        <tr className="[&:not(:last-child)]:border-b border-gray-200">
                            <td>Default</td>
                            <td className="py-3 px-2 text-green-400">
                                <ResponsePill value="Success" />
                            </td>
                        </tr>
                        <tr className="[&:not(:last-child)]:border-b border-gray-200">
                            <th scope="row" className="py-4 px-2 text-center" rowSpan={2}>
                                Admin
                            </th>
                            <td>Account not exists</td>
                            <td className="py-3 px-2 text-red-400">
                                <ResponsePill value="NotFound" />
                            </td>
                        </tr>

                        <tr className="[&:not(:last-child)]:border-b border-gray-200">
                            <td>Default</td>
                            <td className="py-3 px-2 text-green-400">
                                <ResponsePill value="Success" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </ProjectPage>
        </>
    );
};

export default BankingApiPage;
