import Link from "next/link";
import zelda_thumbnail from "../assets/thumbnails/zelda.jpg";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { Url } from "next/dist/shared/lib/router/router";

interface Tag {
    name: string;
    href?: Url;
}

interface ProjectItemProps {
    title: string;
    href: string;
    thumbnail?: string | StaticImport;
    using?: Tag[];
    children?: React.ReactNode;
}

const bulletClassname = "text-xs bg-blue-400 w-min h-min px-2 py-1 rounded-lg";

const ProjectItemCard = ({ title, href, thumbnail, using, children }: ProjectItemProps) => {
    return (
        <>
            <div>
                <Image
                    className="col-span-3 h-48 sm:h-56 rounded-xl  object-cover"
                    src={thumbnail ?? zelda_thumbnail}
                    alt=""
                />
                <Link href={href}>
                    <h3 className="text-3xl mt-3">{title}</h3>
                </Link>
                {/* TAGS */}
                <div className="flex flex-wrap my-2 gap-x-1 gap-y-1 whitespace-nowrap">
                    {using?.map((item, idx) =>
                        item.href ? (
                            <Link
                                key={idx}
                                href={item.href}
                                target="_blank"
                                className={bulletClassname}
                            >
                                {item.name}
                            </Link>
                        ) : (
                            <a key={idx} className={bulletClassname}>
                                {item.name}
                            </a>
                        )
                    )}
                </div>
                {/* Description */}
                {children}
            </div>
        </>
    );
};
export default ProjectItemCard;
