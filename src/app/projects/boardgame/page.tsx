const BoardgamePage = () => {
    return (
        <>
            <div className="px-5 py-3 flex flex-col items-center text-white w-4/5 mx-auto gap-3">
                <div className="text-4xl font-bold py-2 mb-3 border-b-2 w-full">
                    <h1>Boardgame</h1>
                </div>
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/6L9vUaKmu9g?si=WT_Mj7Nto_mPPHU5"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            </div>
        </>
    );
};

export default BoardgamePage;
