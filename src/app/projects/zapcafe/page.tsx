const ZapCafePage = () => {
    return (
        <>
            <div className="px-2 xl:px-5 xl:py-3 flex flex-col items-center text-white md:w-4/5 mx-auto gap-y-3 text-sm lg:text-base">
                <div className="text-4xl font-bold py-2 mb-3 border-b-2 w-full">
                    <h1>Zap Cafe</h1>
                </div>
                <iframe
                    className="w-96 h-64 sm:w-[560px] sm:h-[315px]"
                    src="https://www.youtube.com/embed/W5Xuc6mC_R4?si=c85rBQGkBhqpmLsJ"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
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
            </div>
        </>
    );
};

export default ZapCafePage;
