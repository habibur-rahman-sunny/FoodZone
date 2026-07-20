import Image from "next/image";
import ReusableNav from "./ReusableNav";
import CartIcon from "./CartIcon/CartIcon";
import Link from "next/link";

const Navbar = () => {

    const navItems = [
        { path: "/", text: "Home" },
        { path: "/Menu", text: "Menu" },
        { path: "/Cart", text: "Cart" },
        { path: "/Dashboard", text: "dashboard" },
    ]
    return (
        <div className="shadow-md fixed top-0 left-0 w-full z-50 bg-white">
            <div className="navbar bg-white w-11/12 mx-auto py-3">

                {/* Left */}
                <div className="navbar-start">
                    <div className="flex items-center gap-2">
                        <Image src="/images/logo.png"
                            alt="nav-logo"
                            width={50}
                            height={50}></Image>
                        <h1 className="text-xl font-bold text-[#5B4BFF]">FoodZone</h1>
                    </div>
                </div>

                {/* Center */}
                <div className="navbar-center hidden md:flex relative">
                    <ul className="menu menu-horizontal px-1 gap-6">
                        {navItems.map((item, index) => (
                            <ReusableNav key={index} href={item.path}>
                                {item.text}
                            </ReusableNav>
                        ))}
                    </ul>
                </div>

                {/* End empty rakhlam end dile navItem right side e cole jay*/}
                {/* Right */}
                <Link href={'/Cart'} className="navbar-end">
                    <CartIcon />   {/* ✅ add this */}
                </Link>
            </div>
        </div>

    );
};

export default Navbar;