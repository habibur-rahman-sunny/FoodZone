'use client'

import { CartItemsContext } from "@/app/Context/CartContext";
import { useContext } from "react";

const CartToggleBtn = ({specificFood}) => {
    const {cartItem, setCartItem} = useContext(CartItemsContext)
    const handleCartBtn = ()=> {
        setCartItem([...cartItem, specificFood])
    }
    return (
        <button onClick={handleCartBtn} className="flex-1 bg-orange-500 text-white py-2 rounded-xl hover:bg-orange-600 transition">
            Add Cart
        </button>
    );
};

export default CartToggleBtn;