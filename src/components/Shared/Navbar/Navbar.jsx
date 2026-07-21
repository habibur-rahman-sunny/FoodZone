'use client'
import { useState } from "react";
import Image from "next/image";
import ReusableNav from "./ReusableNav";
import CartIcon from "./CartIcon/CartIcon";
import Link from "next/link";

const Navbar = () => {

    const [user, setUser] = useState(() => {
        if (typeof window !== "undefined") {
            const storedUser = localStorage.getItem("user");
            return storedUser ? JSON.parse(storedUser) : null;
        }
        return null;
    });

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
                <div className="navbar-end flex items-center gap-4">

                    {/* Cart Icon */}
                    <Link href="/Cart">
                        <CartIcon />
                    </Link>


                    {/* User Profile */}
                    {
                        user ? (
                            <div className="dropdown dropdown-end">

                                {/* Profile Image */}
                                <div tabIndex={0} role="button">
                                    <Image
                                        src={user.photo || "/images/logo.png"}
                                        alt="profile"
                                        width={45}
                                        height={45}
                                        className="rounded-full cursor-pointer"
                                    />
                                </div>


                                {/* Dropdown Content */}
                                <div
                                    tabIndex={0}
                                    className="dropdown-content z-[1] mt-3 p-4 shadow bg-white rounded-box w-64">
                                    <div className="space-y-2">
                                        <h3 className="font-bold text-lg">
                                            {user.name}
                                        </h3>
                                        <p className="text-sm text-gray-600">
                                            {user.email}
                                        </p>
                                        <p className="text-sm">
                                            📞 {user.phone || "Phone not added"}
                                        </p>
                                        <p className="text-sm">
                                            📍 {user.address || "Address not added"}
                                        </p>
                                    </div>

                                    <button className="btn btn-error btn-sm mt-4 w-full">
                                        Logout
                                    </button>
                                </div>
                            </div>
                        ) : (
                            // Not Logged In
                            <Link href="/login">
                                <button className="btn btn-primary btn-sm">
                                    Login
                                </button>
                            </Link>
                        )
                    }
                </div>
            </div>
        </div>

    );
};

export default Navbar;