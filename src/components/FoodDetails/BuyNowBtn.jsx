"use client";

import { useContext } from "react";
import { useRouter } from "next/navigation";
import { CartItemsContext } from "@/app/Context/CartContext";

const BuyNowButton = ({ specificFood }) => {

    const router = useRouter();

    // 1 --> Context use
    const { cartItem, setCartItem } = useContext(CartItemsContext);

    // 2 --> onClick Function run
    const handleBuyNow = () => {
        // 4 --> Set item in array
        setCartItem([
            ...cartItem,
            specificFood
        ]);

        router.push("/Checkout");

    };


    return (

        <button
            onClick={handleBuyNow}
            className="bg-black text-white py-2 rounded-sm transition font-semibold"
        >
            Buy Now
        </button>

    );

};

export default BuyNowButton;