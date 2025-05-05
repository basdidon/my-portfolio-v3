import ProjectPage from "@/components/ProjectPage";

const BankingApiPage = () => {
    return (
        <>
            <ProjectPage title="Banking API" githubUrl="https://github.com/basdidon/EventSourcing">
                <p>
                    In this exciting slot machine game, players can test their luck and skill in a
                    classic casino-style experience. The gameplay is simple and engaging:
                </p>
                <h3>Endpoints :</h3>
                <ul className="list-inside px-2">
                    <li>
                        <span className="font-bold text-green-500">GET</span> /accounts
                    </li>
                    <p>&emsp;list all accounts where user is owner</p>
                </ul>
            </ProjectPage>
        </>
    );
};

export default BankingApiPage;
