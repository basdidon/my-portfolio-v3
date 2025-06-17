import { ReactNode } from "react";

interface PageSectionProps {
    title: string;
    children: ReactNode;
}

const PageSection = ({ title, children }: PageSectionProps) => {
    return (
        <div className="my-8 space-y-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">{title}</h2>
            <div className="px-8">{children}</div>
        </div>
    );
};

export default PageSection;
