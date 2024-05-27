import screenshot_1 from "./(screenshots)/wordle-screenshot-1.png";
import screenshot_2 from "./(screenshots)/wordle-screenshot-2.png";
import screenshot_3 from "./(screenshots)/wordle-screenshot-3.png";
import screenshot_4 from "./(screenshots)/wordle-screenshot-4.png";
import screenshot_5 from "./(screenshots)/wordle-screenshot-5.png";
import screenshot_6 from "./(screenshots)/wordle-screenshot-6.png";
import screenshot_7 from "./(screenshots)/wordle-screenshot-7.png";

import Screenshots from "@/components/Screenshots";

const WordlePage = () => {
    const screenshotWidth = 224; //320
    const screenshotHeight = 126; //180
    return (
        <>
            <div className="px-2 xl:px-5 xl:py-3 flex flex-col items-center text-white md:w-4/5 mx-auto gap-y-3 text-sm lg:text-base">
                <div className="text-4xl font-bold py-2 mb-3 border-b-2 w-full">
                    <h1>Wordle</h1>
                </div>
                <iframe
                    className="w-96 h-64 sm:w-[560px] sm:h-[315px]"
                    src="https://www.youtube.com/embed/v5ME3csv2ic?si=wB8cEGoI32Zgd1aj"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
                <div className="w-full text-base">
                    <p>
                        Create a Wordle clone where the player guesses a five-letter word within six
                        attempts. The game provides hints based on the accuracy of the guessed
                        letters:
                    </p>
                    <ul className="list-disc list-inside px-2">
                        <li>
                            If a letter is not in the word, it is revealed in
                            <span className="font-bold text-gray-400"> gray</span> .
                        </li>
                        <li>
                            If a letter is in the word but in the wrong place, it is revealed in
                            <span className="font-bold text-yellow-500"> yellow</span>.
                        </li>
                        <li>
                            If a letter is in the word and in the correct place, it is revealed in{" "}
                            <span className="font-bold text-green-400"> green</span>.
                        </li>
                    </ul>
                </div>
                <div className="w-full space-y-2 mt-2">
                    <h3 className="text-lg md:text-2xl">Features</h3>
                    <ul>
                        <li className="font-bold">2-Way Input :</li>
                        <ul className="list-disc list-inside px-2">
                            <li>
                                <span className="font-bold">Keyboard Input:</span> Allows players to
                                use their physical keyboard to input letters.
                            </li>
                            <li>
                                <span className="font-bold">Virtual Keyboard:</span> Provides an
                                on-screen keyboard for input on touch devices.
                            </li>
                        </ul>
                        <li className="font-bold">Animations :</li>
                        <ul className="list-disc list-inside px-2">
                            <li>
                                <span className="font-bold">Input Letter Animation:</span> Visual
                                feedback for each letter entered by the player.
                            </li>
                            <li>
                                <span className="font-bold">Reveal Answer Animation:</span>{" "}
                                Animations that reveal whether the guessed letters are correct, in
                                the wrong place, or incorrect.
                            </li>
                            <li>
                                <span className="font-bold">Reject Word Animation:</span> Visual
                                indication when a guessed word is not accepted by the game.
                            </li>
                        </ul>
                    </ul>
                </div>
                <Screenshots
                    width={screenshotWidth}
                    height={screenshotHeight}
                    images={[
                        screenshot_1,
                        screenshot_2,
                        screenshot_3,
                        screenshot_4,
                        screenshot_5,
                        screenshot_6,
                        screenshot_7,
                    ]}
                />
            </div>
        </>
    );
};

export default WordlePage;
