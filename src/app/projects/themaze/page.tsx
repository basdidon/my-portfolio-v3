import ProjectPage from "@/components/ProjectPage";

const TheMazePage = () => {
    return (
        <>
            <ProjectPage
                title="The Maze"
                githubUrl="https://github.com/basdidon/TheMaze"
                videoUrl="https://www.youtube.com/embed/fI2DseX_pGg?si=vs3sS5oQGzqPHTuI"
            >
                <div className="w-full text-base">
                    <p>a maze solving game.</p>
                    <ul className="list-disc list-inside px-2">
                        <li>Generate maze with Randomized depth-first search.</li>
                        <li>Increase complexity with section and floor system</li>
                        <li>Implements lighting to create dark maze</li>
                        <li>Create Custom Editor to gennerate exactly tile match with cell data</li>
                    </ul>
                </div>
            </ProjectPage>
        </>
    );
};

export default TheMazePage;
