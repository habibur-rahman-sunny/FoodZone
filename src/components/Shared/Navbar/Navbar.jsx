"use client";


import Image from "next/image";
import Link from "next/link";

import {
    useEffect,
    useState
} from "react";


import ReusableNav from "./ReusableNav";
import CartIcon from "./CartIcon/CartIcon";



const Navbar = () => {


    const [loggedIn, setLoggedIn] = useState(false);


useEffect(() => {


    const checkLogin = () => {

        const token = localStorage.getItem("token");

        if(token){

            setLoggedIn(true);

        }
        else{

            setLoggedIn(false);

        }

    };


    // প্রথমবার check
    checkLogin();



    // login/logout এর পর update করার জন্য
    window.addEventListener(
        "storage",
        checkLogin
    );


    return () => {

        window.removeEventListener(
            "storage",
            checkLogin
        );

    };


}, []);





    const navItems = [

        {
            path: "/",
            text: "Home"
        },

        {
            path: "/Menu",
            text: "Menu"
        },

        {
            path: "/Cart",
            text: "Cart"
        },

        {
            path: "/Dashboard",
            text: "Dashboard"
        },
        {
            path: "/Checkout",
            text: "Checkout"
        }

    ];




    return (


        <div className="shadow-md fixed top-0 left-0 w-full z-50 bg-white">


            <div className="navbar w-11/12 mx-auto">


                {/* Logo */}

                <div className="navbar-start">


                    <Link href="/" className="flex items-center gap-2">


                        <Image

                            src="/images/logo.png"

                            alt="logo"

                            width={50}

                            height={50}

                        />


                        <h1 className="text-xl font-bold text-[#5B4BFF]">

                            FoodZone

                        </h1>


                    </Link>


                </div>





                {/* Menu */}

                <div className="navbar-center hidden md:flex">


                    <ul className="menu menu-horizontal gap-6">


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


                <div className="navbar-end flex gap-4 items-center">



                    <Link href="/Cart">

                        <CartIcon />

                    </Link>




                    {

                        loggedIn ?

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