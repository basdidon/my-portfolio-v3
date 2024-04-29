import React from "react";
import ProjectItem from "../ProjectItem";

const ProjectsSection = () => {
    return (
        <>
            <ProjectItem
                href="projects/flowgraph"
                title="Flow Graph"
                using={["Unity", "C#"]}
            >
                <p>
                    Store dialogues in ScriptableObjects and visualize them in a graph view to make
                    them easy to read and edit.
                </p>
                <ul className="list-disc list-inside px-2">
                    <li>
                        Create a template node specifically for simple dialogues, including choices
                        events.
                    </li>
                    <li>Allow users to create custom nodes with input and output ports.</li>
                    <li>Enable users to style custom nodes as per their preference.</li>
                    <li>Design an interface that makes it easy to create custom nodes.</li>
                </ul>
            </ProjectItem>

            <ProjectItem href="projects/boardgame" title="Boardgame" using={["Unity", "C#"]}>
                <p>create board game that player can use a card to cast abilities</p>
                <ul className="list-disc list-inside px-2">
                    <li>Utilizing Depth-First Search to predict player moves.</li>
                    <li>Implementing a drag & drop system for playing cards.</li>
                    <li>Utilizing DoTween to create animations. Managing input control</li>
                    <li>through a state machine.</li>
                </ul>
            </ProjectItem>
            <ProjectItem href={"projects/aa"} title="Mobile Tycoon Game" using={["Unity", "C#"]}>
                <article>
                    <p>
                        Tycoon game with a cafe theme that allows players to build their own cafe.
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
                            Level system: Whenever a player completes a client's order, they gain
                            experience points (EXP). Upon leveling up, new features unlock.
                        </li>
                    </ul>
                </article>
            </ProjectItem>
            <ProjectItem href={"#"} title="3D RPG top-down game" using={["Unity", "C#"]}>
                <p>Recreate Yasuo from League of Legends and create an enemy bot.</p>
                <ul className="list-disc list-inside px-2">
                    <li>Character's state machine</li>
                    <li>Queued command</li>
                    <li>Enemy's cone detection</li>
                    <li>Combo system</li>
                    <li>Timed buff system</li>
                </ul>
            </ProjectItem>
        </>
    );
};

export default ProjectsSection;
