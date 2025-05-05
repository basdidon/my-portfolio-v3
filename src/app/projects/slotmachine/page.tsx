import ProjectPage from "@/components/ProjectPage";

const SlotMachinePage = () => {
    return (
        <>
            <ProjectPage
                title="Slot Machine"
                githubUrl="https://github.com/basdidon/SlotMachine_V2"
                videoUrl="https://www.youtube.com/embed/ux_1R15zFfc?si=bIylZHv9u36n_Lq-"
            >
                <div className="w-full text-base">
                    <p>
                        In this exciting slot machine game, players can test their luck and skill in
                        a classic casino-style experience. The gameplay is simple and engaging:
                    </p>
                    <ul className="list-disc list-inside px-2">
                        <li>
                            <span className="font-bold">Start Playing: </span> The game begins when
                            the player presses the spacebar. This action sets all the reels
                            spinning.
                        </li>
                        <li>
                            <span className="font-bold">Stop the Reels: </span> The player presses
                            the spacebar again to stop the first reel. Each subsequent press of the
                            spacebar stops the next reel in sequence.
                        </li>
                        <li>
                            <span className="font-bold">Check Results: </span> Once all reels have
                            come to a stop, the game reads the final positions of the reels.
                        </li>
                        <li>
                            <span className="font-bold">Reward System: </span> The game checks the
                            results against a payTable. If the results match any of the combinations
                            in the payTable, the player receives a reward. spinning.
                        </li>
                    </ul>
                </div>
            </ProjectPage>
        </>
    );
};

export default SlotMachinePage;
