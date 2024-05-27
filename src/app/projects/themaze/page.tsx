const TheMazePage = () => {
    return (
        <>
            <div className="px-2 xl:px-5 xl:py-3 flex flex-col items-center text-white md:w-4/5 mx-auto gap-y-3 text-sm lg:text-base">
                <div className="text-4xl font-bold py-2 mb-3 border-b-2 w-full">
                    <h1>The Maze</h1>
                </div>
                <iframe
                    className="w-96 h-64 sm:w-[560px] sm:h-[315px]"
                    src="https://www.youtube.com/embed/fI2DseX_pGg?si=vs3sS5oQGzqPHTuI"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
                <div className="w-full text-base">
                    <p>a maze solving game.</p>
                    <ul className="list-disc list-inside px-2">
                        <li>Generate maze with Randomized depth-first search.</li>
                        <li>Increase complexity with section and floor system</li>
                        <li>Implements lighting to create dark maze</li>
                        <li>Create Custom Editor to gennerate exactly tile match with cell data</li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default TheMazePage;
