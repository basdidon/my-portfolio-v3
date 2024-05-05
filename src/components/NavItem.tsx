import Link from "next/link";

interface NavItemProps {
    href: string;
    children?: React.ReactNode;
}

const NavItem = (props: NavItemProps) => {
    return (
        <>
            <div className="flex items-center md:px-2 text-md md:text-lg font-bold">
                <Link {...props} className="hover:bg-white hover:text-black py-1 px-3 rounded-md" />
            </div>
        </>
    );
};

export default NavItem;