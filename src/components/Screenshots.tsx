import { promises as fs } from "fs";
import { readdir } from "fs/promises";
import path from "path";
import React, { useEffect } from "react";
import Image, { StaticImageData } from "next/image";

interface ScreenshotProps {
    width:number;
    height:number;
    images:StaticImageData[];
}

// Function to import all images from the screenshots folder
/*
const importAll = (r) => r.keys().map(r);
const images = importAll(require.context('./screenshots', false, /\.(png|jpe?g|svg)$/));*/

const Screenshots = async ({ width,height,images }: ScreenshotProps) => {
    return (
        <div className="w-full space-y-2 mt-2">
            <h3 className="text-lg md:text-2xl">Screenshots :</h3>
            <div className="flex flex-wrap gap-2 items-center justify-center">
                {images.map((image) => (
                    <>
                        <Image width={width} height={height} src={image} alt={""} priority />
                    </>
                ))}
            </div>
        </div>
    );
};

export default Screenshots;
