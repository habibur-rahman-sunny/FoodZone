"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import ReusableNav from "./ReusableNav";
import CartIcon from "./CartIcon/CartIcon";
import Link from "next/link";

const Navbar = () => {

    const [user, setUser] = useState(null);
    const [mounted, setMounted] = useState(false);


    useEffect(() => {
        setMounted(true);

        const storedUser = localStorage.getItem("user");

        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }

    }, []);


    // hydration mismatch prevent
    if (!mounted) return null;


    const navItems = [
        { path: "/", text: "Home" },
        { path: "/Menu", text: "Menu" },
        { path: "/Cart", text: "Cart" },
        { path: "/Dashboard", text: "dashboard" },
    ];


    return (
        <div className="shadow-md fixed top-0 left-0 w-full z-50 bg-white">

            <div className="navbar bg-white w-11/12 mx-auto py-3">


                {/* Left */}
                <div className="navbar-start">

                    <div className="flex items-center gap-2">

                        <Image
                            src="/images/logo.png"
                            alt="nav-logo"
                            width={50}
                            height={50}
                        />

                        <h1 className="text-xl font-bold text-[#5B4BFF]">
                            FoodZone
                        </h1>

                    </div>

                </div>



                {/* Center */}
                <div className="navbar-center hidden md:flex relative">

                    <ul className="menu menu-horizontal px-1 gap-6">

                        {
                            navItems.map((item, index) => (

                                <ReusableNav
                                    key={index}
                                    href={item.path}
                                >
                                    {item.text}
                                </ReusableNav>

                            ))
                        }

                    </ul>

                </div>




                {/* Right */}
                <div className="navbar-end flex items-center gap-4">


                    {/* Cart Icon */}
                    <Link href="/Cart">
                        <CartIcon />
                    </Link>



                    {/* Login / Profile Button */}

                    {
                        user ?

                            (
                                <Link href="/Profile">

                                    <button className="btn btn-primary btn-sm">
                                        Profile
                                    </button>

                                </Link>
                            )

                            :

                            (
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