import React from "react";
import NavItem from "./NavItem";
import Link from "next/link";

const Navbar = () => {
    const resume_url =
        "https://drive.google.com/file/d/12_FYs7mhFhbdzPujznaTK8d19qp5zo7o/view?usp=drive_link";

    const resume_path = "/resume";
    return (
        <nav className="bg-zinc-900 text-white px-1 py-2 flex flex-row items-center">
            <div className="items-center flex flex-row divide-x-2">
                <NavItem href="/#">Me.</NavItem>
                <NavItem href="/#skills">Skills</NavItem>
                <NavItem href="/#projects">Projects</NavItem>
            </div>
            <div className="flex flex-row-reverse ms-auto me-2">
                <Link
                    href={resume_path}
                    //target="_blank"
                    className="px-2 py-1 font-bold text-center border-2 rounded-lg hover:bg-gray-300 hover:text-black"
                >
                    My Resume
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
