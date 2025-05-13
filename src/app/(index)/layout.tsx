import Navbar from "@/components/Navbar";
import React, { ReactNode } from "react";

export default function IndexLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <Navbar />
            {children}
        </>
    );
}
