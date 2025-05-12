"use client";

import ApiDisplay from "@/components/ApiDisplay";
import PrismGist from "@/components/PrismGist";
import ProjectPage from "@/components/ProjectPage";

import { projectApiDetails } from "./projectApiDetail";

import uml from "./(img)/bankingapi_uml.png";
import Image from "next/image";

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
                <div className="w-full my-8 space-y-2 flex-col items-center justify-center">
                    <Image
                        src={uml}
                        alt="UML use case diagram"
                        className="w-full md:w-3/4 mx-auto"
                    />
                    <p className=" text-center text-gray-400">UML use case diagram</p>
                </div>
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
                        class represents the current state of a user&apos;s bank account. Key
                        properties include:
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
                            Human-readable identifier for the account (e.g.,
                            &quot;123-456789-0&quot;).
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
                            : Change the account&apos;s status.
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
                        This class maps events to changes in the BankAccount state using
                        Marten&aspo;s SingleStreamProjection&lt;T&gt;
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
                            {projectApiDetails.map((x) => {
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

                {projectApiDetails.map((x, idx) => (
                    <ApiDisplay key={idx} {...x} />
                ))}
            </ProjectPage>
        </>
    );
};

export default BankingApiPage;
