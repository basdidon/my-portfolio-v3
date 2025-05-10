// components/PrismGist.tsx
import { useEffect, useState } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css";
import "prismjs/components/prism-csharp";
import "prismjs/components/prism-javascript"; // load specific language
import "prismjs/plugins/line-numbers/prism-line-numbers.js";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import Link from "next/link";

const LanguageClassnameMap = {
    CSharp: "language-csharp",
    Javascript: "languege-javascript",
};

type Props = {
    codeLang: keyof typeof LanguageClassnameMap;
    gistRawFileUrl: string;
    fontSize?: number;
    classname?: string;
};

export default function PrismGist({ codeLang, gistRawFileUrl, fontSize = 12, classname }: Props) {
    const languageClassname = LanguageClassnameMap[codeLang];
    const [code, setCode] = useState("");
    const [isSuccess, SetIsSuccess] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(gistRawFileUrl);
                if (!response.ok) throw new Error("Network response was not ok");
                const data = await response.text();
                setCode(data);
                SetIsSuccess(true);
            } catch {}
        };

        fetchData();
    }, [gistRawFileUrl]);

    useEffect(() => {
        Prism.highlightAll();
    }, [code]);

    if (!isSuccess) {
        return (
            <div className="w-full bg-neutral-400  pt-2 pb-4 px-2 md:p-8">
                <p className="text-lg md:text-2xl font-bold ">Failed to fetch :&#40;</p>
                <p className="text-sm md:text-base block truncate mb-2">
                    GistUrl : {gistRawFileUrl}
                </p>
                <Link
                    href={gistRawFileUrl}
                    target="_blank"
                    className=" border-2 border-white text-white  font-bold py-1 px-4 rounded hover:bottom-0 hover:text-neutral-400 hover:bg-white"
                >
                    Open
                </Link>
            </div>
        );
    }

    return (
        <div className={classname}>
            <pre
                className={`line-numbers ${languageClassname} w-full border-blue-500 border-2 rounded-lg scrollbar-hide`}
                style={{ fontSize: fontSize }}
            >
                <code className={languageClassname}>{code}</code>
            </pre>
        </div>
    );
}
