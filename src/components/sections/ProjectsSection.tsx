import React from "react";
import ProjectItem from "../ProjectItem";

import FlowgraphThumbnail from "../../assets/thumbnails/flowgraph_thumbnail.png";
import ZapcafeThumbnail from "../../assets/thumbnails/zapcafe_thumbnail.png";
import BoardgameThumbnail from "../../assets/thumbnails/boardgame_thumbnail.png";
import TheMazeThumbnail from "../../assets/thumbnails/themaze_thumbnail.png";
import WordleThumbnail from "../../app/projects/wordle/(screenshots)/wordle-screenshot-6.png";
import SlotMachineThumbnail from "../../assets/thumbnails/slot-machine-thumbnail.png";

const ProjectsSection = () => {
    return (
        <>
            <div className="space-y-4">
                <ProjectItem
                    href="projects/wordle"
                    title="Wordle"
                    using={["Unity", "C#"]}
                    thumbnail={WordleThumbnail}
                >
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
                </ProjectItem>
                <ProjectItem
                    href="projects/flowgraph"
                    title="Flow Graph"
                    thumbnail={FlowgraphThumbnail}
                    using={["Unity", "C#"]}
                >
                    <p>
                        Store dialogues in ScriptableObjects and visualize them in a graph view to
                        make them easy to read and edit.
                    </p>
                    <ul className="list-disc list-inside px-2">
                        <li>
                            Create a template node specifically for simple dialogues, including
                            choices events.
                        </li>
                        <li>Allow users to create custom nodes with input and output ports.</li>
                        <li>Enable users to style custom nodes as per their preference.</li>
                        <li>Design an interface that makes it easy to create custom nodes.</li>
                    </ul>
                </ProjectItem>
                <ProjectItem
                    href={"projects/zapcafe"}
                    title="Zap Cafe"
                    thumbnail={ZapcafeThumbnail}
                    using={["Unity", "C#"]}
                >
                    <p>Idle game with a cafe theme that allows players to build their own cafe.</p>
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
                </ProjectItem>
                <ProjectItem
                    href="projects/boardgame"
                    title="Boardgame"
                    thumbnail={BoardgameThumbnail}
                    using={["Unity", "C#"]}
                >
                    <p>a board game that player can use a card to cast abilities</p>
                    <ul className="list-disc list-inside px-2">
                        <li>Utilizing Depth-First Search to predict player moves.</li>
                        <li>Implementing a drag & drop system for playing cards.</li>
                        <li>Utilizing DoTween to create animations. </li>
                        <li>Managing input control through a state machine.</li>
                    </ul>
                </ProjectItem>

                <ProjectItem
                    href={"projects/themaze"}
                    title="The Maze"
                    thumbnail={TheMazeThumbnail}
                    using={["Unity", "C#"]}
                >
                    <p>a maze solving game.</p>
                    <ul className="list-disc list-inside px-2">
                        <li>Generate maze with Randomized depth-first search.</li>
                        <li>Increase complexity with section and floor system</li>
                        <li>Implements lighting to create dark maze</li>
                        <li>Create Custom Editor to gennerate exactly tile match with cell data</li>
                    </ul>
                </ProjectItem>

                <ProjectItem
                    href="projects/slotmachine"
                    title="Slot Machine"
                    using={["Unity", "C#"]}
                    thumbnail={SlotMachineThumbnail}
                >
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
                            <span className="font-bold">Reward System: </span> The game checks the
                            results against a payTable. If the results match any of the combinations
                            in the payTable, the player receives a reward. spinning.
                        </li>
                    </ul>
                </ProjectItem>
            </div>
        </>
    );
};

export default ProjectsSection;
