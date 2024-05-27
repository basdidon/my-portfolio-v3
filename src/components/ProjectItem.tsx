import Link from "next/link";
import zelda_thumbnail from "../assets/thumbnails/zelda.jpg";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface ProjectItemProps {
    title: string;
    href: string;
    thumbnail?: string | StaticImport;
    using?: string[];
    children?: React.ReactNode;
}

const ProjectItem = ({ title, href, thumbnail, using, children }: ProjectItemProps) => {
    return (
        <>
            <div className=" bg-neutral-900 w-full grid grid-cols-3 rounded-xl place-items-stretch">
                <Image
                    className="col-span-3 h-48 sm:h-56 sm:col-span-1 rounded-t-xl sm:rounded-t-none sm:rounded-s-xl object-cover"
                    src={thumbnail ?? zelda_thumbnail}
                    alt=""
                />
                <div className="col-span-3 py-3 px-2 sm:px-3 md:px-5 sm:col-span-2 sm:max-h-48">
                    <div className="flex">
                        <Link href={href}>
                            <p className=" text-lime-400 text-2xl lg:text-3xl font-bold">{title}</p>
                        </Link>
                        <div className="ms-3 my-1">
                            {using?.map((item, idx) => (
                                <Link
                                    key={idx}
                                    href="#"
                                    className="px-2 me-1 bg-blue-700 rounded-md text-xs font-bold"
                                >
                                    {item}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="text-xs sm:text-sm md:text-base sm:line-clamp-[8] md:line-clamp-[7]">{children}</div>
                </div>
            </div>
        </>
    );
};

export default ProjectItem;
