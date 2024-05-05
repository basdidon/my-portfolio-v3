import Image, { StaticImageData } from "next/image";

interface SkillItemProps {
    name: string;
    src: StaticImageData;
}

const SkillItem = ({ name, src }: SkillItemProps) => {
    return (
        <>
            <div className="bg-slate-500 w-32 items-center flex flex-col">
                <Image src={src} className="mt-auto mx-auto  size-16 xl:size-24" alt={name} />
                <h3 className="text-center text-sm mt-1 w-full">{name}</h3>
            </div>
        </>
    );
};

export default SkillItem;
