// components/PrismGist.tsx
import { useEffect, useState } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css";
import "prismjs/components/prism-csharp";
import "prismjs/components/prism-javascript"; // load specific language
import "prismjs/plugins/line-numbers/prism-line-numbers.js";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";

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

    useEffect(() => {
        fetch(gistRawFileUrl)
            .then((res) => res.text())
            .then((data) => {
                setCode(data);
            });
    }, [gistRawFileUrl]);

    useEffect(() => {
        Prism.highlightAll();
    }, [code]);

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
