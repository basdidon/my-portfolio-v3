import ProjectPage from "@/components/ProjectPage";

const BoardgamePage = () => {
    return (
        <>
            <ProjectPage
                title="Boardgame"
                githubUrl="https://github.com/basdidon/Boardgame"
                videoUrl="https://www.youtube.com/embed/6L9vUaKmu9g?si=WT_Mj7Nto_mPPHU5"
            >
                <div className="w-full text-base">
                    <p>a board game that player can use a card to cast abilities</p>
                    <ul className="list-disc list-inside px-2">
                        <li>Utilizing Depth-First Search to predict player moves.</li>
                        <li>Implementing a drag & drop system for playing cards.</li>
                        <li>Utilizing DoTween to create animations. </li>
                        <li>Managing input control through a state machine.</li>
                    </ul>
                </div>
            </ProjectPage>
        </>
    );
};

export default BoardgamePage;
