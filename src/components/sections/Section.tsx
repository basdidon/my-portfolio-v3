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
            className="text-white w-dvh grow px-16 py-4 items-center odd:bg-zinc-700 even:bg-zinc-800"
        >
            {title && (
                <div className="border-b-2 py-3 font-bold">
                    <p className="text-5xl ps-5">
                        <span className="text-blue-500">My</span> {title}
                    </p>
                </div>
            )}

            <div className="my-5 space-y-5">{children}</div>
        </section>
    );
};

export default Section;
