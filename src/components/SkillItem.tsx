import Image, { StaticImageData } from "next/image";

interface SkillItemProps {
    name: string;
    src: StaticImageData;
}

const SkillItem = ({ name, src }: SkillItemProps) => {
    return (
        <>
            <div className="size-28 md:size-36 items-center flex flex-col rounded-md shadow-md shadow-zinc-950 place-items-center justify-items-center border-zinc-700 border">
                <div className="m-auto">

                <Image src={src} className="mx-auto  size-16 md:size-24" alt={name} />
                <h3 className="text-center text-sm mt-1 w-full">{name}</h3>
                </div>
            </div>
        </>
    );
};

export default SkillItem;
