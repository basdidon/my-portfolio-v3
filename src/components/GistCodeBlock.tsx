import ReactEmbedGist from "react-embed-gist";

const GistCodeBlock = () => {
    return (
        <ReactEmbedGist
            gist="msaracevic/5d757e2fc72482a9a4a439969500c2eb"
            wrapperClass="gist__bash"
            loadingClass="loading__screen"
            titleClass="gist__title"
            errorClass="gist__error"
            contentClass="gist__content"
        />
    );
};

export default GistCodeBlock;
