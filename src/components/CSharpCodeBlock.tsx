export interface CSharpCodeBlockProps{
    codeString: string;
}

const CSharpCodeBlock = ({codeString}:CSharpCodeBlockProps) => {
    return (
        <>
            <div className="w-4/5 mx-auto">
                <pre className="line-numbers language-csharp">
                    <code className="language-csharp">{codeString}</code>
                </pre>
            </div>
        </>
    );
};

export default CSharpCodeBlock;
