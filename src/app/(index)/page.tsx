import Link from "next/link";
import Image from "next/image";

import SkillItem from "@/components/SkillItem";
import Section from "@/components/sections/Section";

import CShapeIcon from "@/assets/c_sharp_icon.png";
import PythonIcon from "@/assets/python_icon.png";
import JavaScriptIcon from "@/assets/js_icon.png";
import ReactIcon from "@/assets/react.svg";
import TypeScriptIcon from "@/assets/typescript_icon.png";
import UnityIcon from "@/assets/unity.png";
import BlenderIcon from "@/assets/blender_icon.png";
import AsepriteIcon from "@/assets/aseprite_icon.png";
import IllustratorIcon from "@/assets/adobe_Illustrator_icon.png";

import Profile from "@/assets/profile.jpg";
import ProjectItemCard from "@/components/ProjectItemCard";

import CourseEnrollmentThumbnail from "@/assets/thumbnails/Course_Enrollment_API.png";
import BankingApiThumbnail from "@/assets/thumbnails/Banking API Thumbnail_simple.png";
import FlowgraphThumbnail from "@/assets/thumbnails/flowgraph_thumbnail.png";
import ZapcafeThumbnail from "@/assets/thumbnails/zapcafe_thumbnail.png";
import BoardgameThumbnail from "@/assets/thumbnails/boardgame_thumbnail.png";
import TheMazeThumbnail from "@/assets/thumbnails/themaze_thumbnail.png";
import WordleThumbnail from "@/app/projects/wordle/(screenshots)/wordle-screenshot-6.png";
import SlotMachineThumbnail from "@/assets/thumbnails/slot-machine-thumbnail.png";

const Home = () => {
    const githubUrl = "https://github.com/basdidon";
    const facebookPageUrl = "https://www.facebook.com/profile.php?id=100093078866767";

    return (
        <>
            <div id="content" className="min-h-dvh flex flex-col">
                <Section>
                    <div className="grid grid-cols-3 space-y-3 gap-x-8 place-items-start items-center">
                        <Image
                            src={Profile}
                            alt="profile"
                            className="
                            size-28
                            sm:size-32 
                            md:size-48 md:row-span-2
                            lg:size-56 
                            xl:size-64 
                            rounded-full mx-auto
                            object-cover
                            "
                        />
                        <div className="col-span-2">
                            <p className="text-3xl md:text-5xl font-bold">Hi, I&apos;m Bas.</p>
                            <p className="text-lg md:text-xl line-clamp-1 overflow-visible">
                                Unity Game Developer
                            </p>
                        </div>
                        <div className="col-span-3 md:col-start-2 md:col-span-2">
                            <p className="text-xs md:text-sm">
                                &emsp;&emsp; A game development enthusiast with a passion for
                                creating immersive experiences. While I don&apos;t have professional
                                experience yet, I&apos;ve dedicated myself to honing my skills in
                                game development using Unity for the past 2 years. My expertise
                                includes working with Unity&apos;s powerful tools such as
                                ScriptableObject, CustomEditor, UiToolkit, and InputAction, allowing
                                me to craft engaging gameplay mechanics and user interfaces.
                                I&apos;m excited about the opportunity to leverage my skills and
                                contribute to innovative projects in the game development industry.
                            </p>
                            <div className="flex my-4 text-lg font-bold">
                                <Link
                                    id="github"
                                    href={githubUrl}
                                    target="_blank"
                                    className="bg-zinc-600 text-white p-2 shadow-md shadow-zinc-800 rounded-lg"
                                >
                                    <svg
                                        viewBox="0 0 100 100"
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="size-8 inline-block my-auto"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                                        />
                                    </svg>
                                </Link>
                                <Link
                                    id="facebook"
                                    href={facebookPageUrl}
                                    target="_blank"
                                    className="bg-zinc-600 text-white p-2 shadow-md shadow-zinc-800 rounded-lg ms-2"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 50 50"
                                        fill="currentColor"
                                        className="size-8 inline-block my-auto"
                                    >
                                        <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"></path>
                                    </svg>
                                </Link>

                                <Link
                                    href="#"
                                    className="bg-blue-500 w-50 rounded-lg items-center space-x-2 px-2 py-1 flex ms-auto shadow-md shadow-zinc-800 "
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="size-8 inline-block my-auto"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span>Hire Me</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Section>
                <Section title="Skills">
                    {/* add skill content below*/}
                    <div className="p-2 space-y-10">
                        <div className="flex flex-row flex-wrap items-start justify-center gap-x-3 gap-y-3 xl:gap-6">
                            <SkillItem name="C#" src={CShapeIcon} />
                            <SkillItem name="Python" src={PythonIcon} />
                            <SkillItem name="JavaScript" src={JavaScriptIcon} />
                            <SkillItem name="React Js" src={ReactIcon} />
                            <SkillItem name="Typescript" src={TypeScriptIcon} />
                        </div>
                        <div className="flex flex-row flex-wrap items-center justify-center gap-x-10 gap-y-5 xl:gap-6">
                            <SkillItem name="Unity" src={UnityIcon} />
                            <SkillItem name="Blender" src={BlenderIcon} />
                            <SkillItem name="Aseprite" src={AsepriteIcon} />
                            <SkillItem name="Adobe Illustrator" src={IllustratorIcon} />
                        </div>
                    </div>
                </Section>
                {/*
                <Section id="projects" title="Projects">
                    <ProjectsSection />
                </Section>
                */}
                <Section id="projects" title="Projects">
                    <div className="grid grid-cols-1 gap-y-4 xl:grid-cols-3 xl:gap-x-2">
                        <ProjectItemCard
                            title="Course Enrollment API"
                            href="projects/course_enrollment_api"
                            thumbnail={CourseEnrollmentThumbnail}
                            using={[
                                { name: "C#" },
                                { name: "ASP.NET" },
                                { name: "EF Core" },
                                { name: "Docker" },
                                { name: "MediatR" },
                                { name: "ASP.NET Core Identity" },
                            ]}
                        >
                            <p>
                                A microservices-based Course Enrollment system with Identity and
                                Course services, built using Clean Architecture. Supports JWT
                                authentication, role-based access (Admin, Instructor, Student), and
                                course management with enrollment handling via MediatR.
                            </p>
                        </ProjectItemCard>
                        <ProjectItemCard
                            title="Banking API"
                            href="projects/banking_api"
                            thumbnail={BankingApiThumbnail}
                            using={[
                                { name: "C#" },
                                { name: "ASP.NET" },
                                { name: "EF Core" },
                                { name: "MartenDb" },
                                { name: "FastEndpoints", href: "https://fast-endpoints.com/" },
                                { name: "Docker" },
                                { name: "ASP.NET Core Identity" },
                            ]}
                        >
                            <p>
                                A simple banking API following the PEPR pattern, using event
                                sourcing as the source of truth. It features role- and claims-based
                                authentication for secure access control and includes integration
                                tests to ensure reliability.
                            </p>
                        </ProjectItemCard>
                        <ProjectItemCard
                            href="projects/wordle"
                            title="Wordle"
                            using={[{ name: "C#" }, { name: "Unity" }]}
                            thumbnail={WordleThumbnail}
                        >
                            <p>
                                Create a Wordle clone where the player guesses a five-letter word
                                within six attempts. The game provides hints based on the accuracy
                                of the guessed letters
                            </p>
                        </ProjectItemCard>
                        <ProjectItemCard
                            href="projects/flowgraph"
                            title="Flowgraph"
                            using={[{ name: "C#" }, { name: "Unity" }]}
                            thumbnail={FlowgraphThumbnail}
                        >
                            <p>
                                Store dialogues in ScriptableObjects and visualize them in a graph
                                view to make them easy to read and edit.
                            </p>
                        </ProjectItemCard>
                        <ProjectItemCard
                            href="projects/zapcafe"
                            title="Zap cafe"
                            using={[{ name: "C#" }, { name: "Unity" }]}
                            thumbnail={ZapcafeThumbnail}
                        >
                            <p>
                                Idle moblie game with a cafe theme that allows players to build
                                their own cafe.
                            </p>
                            <p className="text-lg text-yellow-300">Highlight Features:</p>
                            <ul className="list-disc list-inside px-2">
                                <li>Recipe system</li>
                                <li>Object Placement</li>
                                <li>Task system</li>
                            </ul>
                        </ProjectItemCard>
                        <ProjectItemCard
                            href="projects/boardgame"
                            title="Boardgame"
                            using={[{ name: "C#" }, { name: "Unity" }]}
                            thumbnail={BoardgameThumbnail}
                        >
                            <p>a board game that player can use a card to cast abilities</p>
                        </ProjectItemCard>
                        <ProjectItemCard
                            href="projects/themaze"
                            title="The maze"
                            using={[{ name: "C#" }, { name: "Unity" }]}
                            thumbnail={TheMazeThumbnail}
                        >
                            This game challenges players to navigate a maze that changes every time
                            they play. The maze is split into different sections and floors, making
                            it more difficult as they progress. To add to the challenge, the maze is
                            dark, and players need light to see their way.
                        </ProjectItemCard>
                        <ProjectItemCard
                            href="projects/slotmachine"
                            title="Slotmachine"
                            using={[{ name: "C#" }, { name: "Unity" }]}
                            thumbnail={SlotMachineThumbnail}
                        >
                            <p>
                                In this exciting slot machine game, players can test their luck and
                                skill in a classic casino-style experience. The gameplay is simple
                                and engaging
                            </p>
                        </ProjectItemCard>
                    </div>
                </Section>
            </div>
        </>
    );
};

export default Home;

export const metadata = {
    title: "Pongsatorn's portfolio",
    description: "",
};
