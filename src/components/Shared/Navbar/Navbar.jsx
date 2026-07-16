import Image from "next/image";
import ReusableNav from "./ReusableNav";

const Navbar = () => {

    const navItems = [
        { path: "/", text: "Home" },
        { path: "/App", text: "Menu" },
        { path: "/Cart", text: "Cart" },
        { path: "/dashboard", text: "dashboard" },
    ]
    return (
        <div className="shadow-md">
            <div className="navbar bg-white w-11/12 mx-auto py-3">

                {/* Left */}
                <div className="navbar-start">
                    <div className="flex items-center gap-2">
                        <Image src="/images/logo.png"
                        alt="nav-logo"
                        width={50} 
                        height={50}></Image>
                        <h1 className="text-xl font-bold text-[#5B4BFF]">EasyMart</h1>
                    </div>
                </div>

                {/* Center */}
                <div className="navbar-center hidden md:flex">
                    <ul className="menu menu-horizontal px-1 gap-6">
                        {navItems.map((item, index) => (
                            <ReusableNav key={index} href={item.path}>
                                {item.text}
                            </ReusableNav>
                        ))}
                    </ul>
                </div>
                {/* End empty rakhlam end dile navItem right side e cole jay*/}
                <div className="navbar-end">
                    {/* Empty or buttons */}
                </div>
            </div>
        </div>

    );
};

export default Navbar;