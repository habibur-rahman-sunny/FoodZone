"use client"
import { Menu } from "lucide-react";
import ReusableNav from "./ReusableNav";
import { useState } from "react";

const NavItems = [
    { path: "/", text: "Home" },
    { path: "/Menu", text: "Menu" },
    { path: "/Cart", text: "Cart" },
    { path: "/Checkout", text: "Checkout" },
    { path: "/Dashboard", text: "Dashboard" },
]

const MobileMenu = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <div>
            <button className="md:hidden" onClick={() => setShowMenu(!showMenu)}>
                <Menu />
            </button>

            {showMenu && (
                <div className="absolute right-0 top-16 bg-white flex flex-col gap-4 shadow-md p-5 md:hidden">
                    {

                        NavItems.map((NavItem, index) => {
                            return (
                                <ReusableNav href={NavItem.path} key={index}>
                                    <div className="flex items-center gap-1">
                                        {NavItem.text}
                                    </div>
                                </ReusableNav>
                            )
                        })

                    }
                </div>
            )}
        </div>
    )
};

export default MobileMenu;