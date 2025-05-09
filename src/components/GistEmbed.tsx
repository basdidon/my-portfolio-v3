type Props = {
    gistUrl: string;
    theme?: "dark" | "light";
};

export default function GistEmbed({ gistUrl, theme = "light" }: Props) {
    const embedUrl = gistUrl.endsWith(".js") ? gistUrl : `${gistUrl}.js`;

    const darkCSS = `
    body .gist 
    {
      .highlight {
        background: #3f3f46;
      }
      .pl-s1 {
        color: #fff;
      }
      .pl-kos {
        color: #fff;
      }
      .pl-smi {
        color : #4EC9B0;
      }
      .pl-k {
        color: #569CD6;
      }
      .pl-c1 { 
        color: #D4D4D4;
      }
      .pl-en {
        color: 	#DCDCAA;
      }
      .pl-v {
        color : #4EC9B0;
      }
    }
    body .gist .gist-file {
      border-color: #555 #555 #444
    }
    body .gist .gist-data {
      border-color: #555
    }
    body .gist .gist-meta {
      color: #ffffff;
      background: #373737; 
    }
    body .gist .gist-meta a {
      color: #ffffff
    }
    body .gist .gist-data .pl-s .pl-s1 {
      color: #a5c261
    }
    `;

    const styleTag = `<style>${theme === "dark" ? darkCSS : ""}</style>`;

    const srcDoc = `
    <html>
      <head>${styleTag}</head>
      <body>
        <script src="${embedUrl}"></script>
      </body>
    </html>
  `;

    return (
        <iframe
            width="100%"
            height="500"
            frameBorder="0"
            srcDoc={srcDoc}
            style={{ border: "none" }}
        />
    );
}
