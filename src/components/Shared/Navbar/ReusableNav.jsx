'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

const ReusableNav = ({children, href}) => {
    const pathname = usePathname()
    return (
        <Link href={href}
         className={`px-5 py-2 rounded-lg transition-all duration-300 font-medium border 
         ${pathname === href?"bg-[#7C4DFF] text-white border-[#7C4DFF] shadow-md"
         :"text-gray-700 border-transparent hover:bg-[#F3F0FF] hover:text-[#7C4DFF]"}`}>
            {children}
        </Link>
    );
};

export default ReusableNav;