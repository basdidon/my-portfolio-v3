import Link from "next/link";
import zelda_thumbnail from "../assets/thumbnails/zelda.jpg";
import Image from "next/image";

interface ProjectItemProps {
    title: string;
    href: string;
    using?: string[];
    children?: React.ReactNode;
}

const ProjectItem = ({ title, href, using, children }: ProjectItemProps) => {
    return (
        <>
            <div className="bg-slate-800 w-full h-60 grid grid-cols-3 rounded-xl place-items-stretch">
                <Image className="h-60 rounded-s-xl object-fill" src={zelda_thumbnail} alt="" />
                <div className="col-span-2 py-3 px-5">
                    <Link href={href}>
                        <p className="text-3xl">{title}</p>
                    </Link>
                    <div className="my-1">
                        {using?.map((item, idx) => (
                            <Link
                                key={idx}
                                href="#"
                                className="px-2 me-1 bg-blue-600 rounded-md text-sm font-bold"
                            >
                                {item}
                            </Link>
                        ))}
                    </div>
                    <div className="line-clamp-6">{children}</div>
                </div>
            </div>
        </>
    );
};

export default ProjectItem;
