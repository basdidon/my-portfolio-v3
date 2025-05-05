import ProjectPage from "@/components/ProjectPage";

const ZapCafePage = () => {
    return (
        <>
            <ProjectPage
                title="Zap Cafe"
                githubUrl="https://github.com/basdidon/ZapCafe"
                videoUrl="https://www.youtube.com/embed/W5Xuc6mC_R4?si=c85rBQGkBhqpmLsJ"
            >
                <div className="w-full text-base">
                    <p className="text-start">
                        Idle game with a cafe theme that allows players to build their own cafe.
                    </p>
                    <ul className="list-disc list-inside px-2">
                        <li>
                            Recipe system: Each menu item has different ingredients and methods for
                            preparation.
                        </li>
                        <li>
                            Workspace: A place where workers can execute tasks to turn ingredients
                            into new ingredients or food, but they cannot be used simultaneously.
                        </li>
                        <li>
                            Task system: Each task can have dependent tasks that need to be
                            fulfilled before it can start.
                        </li>
                        <li>Task Management: Manages and assigns tasks to workers.</li>
                        <li>
                            Level system: Whenever a player completes a client&apos;s order, they
                            gain experience points (EXP). Upon leveling up, new features unlock.
                        </li>
                    </ul>
                </div>
            </ProjectPage>
        </>
    );
};

export default ZapCafePage;
