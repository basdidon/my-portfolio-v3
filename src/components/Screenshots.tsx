import React, { useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import PageSection from "./PageSection";

interface ScreenshotProps {
    width: number;
    height: number;
    images: StaticImageData[];
}

// Function to import all images from the screenshots folder
/*
const importAll = (r) => r.keys().map(r);
const images = importAll(require.context('./screenshots', false, /\.(png|jpe?g|svg)$/));*/

const Screenshots = async ({ width, height, images }: ScreenshotProps) => {
    return (
        <div className="w-full space-y-2 mt-2">
            <PageSection title="Screenshots :">
                <div className="flex flex-wrap gap-2 items-center justify-center">
                    {images.map((image, idx) => (
                        <Image
                            key={idx}
                            width={width}
                            height={height}
                            src={image}
                            alt={""}
                            priority
                        />
                    ))}
                </div>
            </PageSection>
        </div>
    );
};

export default Screenshots;
