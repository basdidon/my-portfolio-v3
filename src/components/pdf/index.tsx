"use client";
import dynamic from "next/dynamic";
//export { PDFViewer } from "@react-pdf/renderer";
export { ResumeDocument } from "./resume/ResumeDocument";

export const PDFViewer = dynamic(
    async () => await import("@react-pdf/renderer").then((m) => m.PDFViewer),
    { ssr: false, loading: () => <>loading..</> }
);

export const PDFDownloadLink = dynamic(
    () => import("@react-pdf/renderer").then((m) => m.PDFDownloadLink),
    { ssr: false, loading: () => <>loading...</> }
);
