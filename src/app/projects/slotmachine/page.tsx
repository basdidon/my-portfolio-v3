const SlotMachinePage = () => {
    return (
        <>
            <div className="px-2 xl:px-5 xl:py-3 flex flex-col items-center text-white md:w-4/5 mx-auto gap-y-3 text-sm lg:text-base">
                <div className="text-4xl font-bold py-2 mb-3 border-b-2 w-full">
                    <h1>Slot Machine</h1>
                </div>
                <iframe
                    className="w-96 h-64 sm:w-[560px] sm:h-[315px]"
                    src="https://www.youtube.com/embed/ux_1R15zFfc?si=bIylZHv9u36n_Lq-"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
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
                        </li>{" "}
                        <li>
                            <span className="font-bold">Check Results: </span> Once all reels have
                            come to a stop, the game reads the final positions of the reels.
                        </li>{" "}
                        <li>
                            <span className="font-bold">Reward System: </span>  The
                            game checks the results against a payTable. If the results match
                            any of the combinations in the payTable, the player receives a reward.
                            spinning.
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default SlotMachinePage;
