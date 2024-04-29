import Image, { StaticImageData } from "next/image";

interface SkillItemProps {
    name: string;
    src: StaticImageData;
}

const SkillItem = ({ name, src }: SkillItemProps) => {
    const className = "mx-auto size-24";

    return (
        <>
            <div className="size-32 items-center justtify-center">
                {src ? (
                    <Image src={src} className={className} alt={name} />
                ) : (
                    <div className={className + "bg-white rounded-full"} />
                )}
                <h3 className="text-center text-sm mt-1">{name}</h3>
            </div>
        </>
    );
};

export default SkillItem;