import { PDFViewer, ResumeDocument } from "@/components/pdf";

const ResumePage = () => {
    return (
        <PDFViewer className="min-h-screen w-full">
            <ResumeDocument title={"Pongsatorn's resume"} />
        </PDFViewer>
    );
};

export default ResumePage;
