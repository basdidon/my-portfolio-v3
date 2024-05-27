import { ReactNode } from "react";

interface SectionProps {
    id?: string;
    title?: string;
    children: ReactNode;
}

const Section = ({ id, title, children }: SectionProps) => {
    return (
        <section
            id={id}
            className="text-white w-dvh grow py-4 items-center odd:bg-zinc-700 even:bg-zinc-800 px-2 sm:px-4 md:px-8 xl:px-16"
        >
            {title && (
                <div className="border-b-2 py-3 font-bold mb-2">
                    <p className="text-4xl md:text-5xl ps-5">
                        <span className="text-blue-500">My</span> {title}
                    </p>
                </div>
            )}

            <div>{children}</div>
        </section>
    );
};

export default Section;
