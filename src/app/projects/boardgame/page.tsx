const BoardgamePage = () => {
    return (
        <>
            <div className="px-2 xl:px-5 xl:py-3 flex flex-col items-center text-white md:w-4/5 mx-auto gap-y-3 text-sm lg:text-base">
                <div className="text-4xl font-bold py-2 mb-3 border-b-2 w-full">
                    <h1>Boardgame</h1>
                </div>
                <iframe
                    className="w-96 h-64 sm:w-[560px] sm:h-[315px]"
                    src="https://www.youtube.com/embed/6L9vUaKmu9g?si=WT_Mj7Nto_mPPHU5"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
                <div className="w-full text-base">
                    <p>a board game that player can use a card to cast abilities</p>
                    <ul className="list-disc list-inside px-2">
                        <li>Utilizing Depth-First Search to predict player moves.</li>
                        <li>Implementing a drag & drop system for playing cards.</li>
                        <li>Utilizing DoTween to create animations. </li>
                        <li>Managing input control through a state machine.</li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default BoardgamePage;
