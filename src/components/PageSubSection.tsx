import { ReactNode } from "react";

interface PageSubSectionProps {
    title: string;
    children: ReactNode;
}

const PageSubSection = ({ title, children }: PageSubSectionProps) => {
    return (
        <div className="space-y-2 my-4">
            <p className="text-base sm:text-lg md:text-xl">{title}</p>
            <div>{children}</div>
        </div>
    );
};

export default PageSubSection;
