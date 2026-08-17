'use client'
import { CartItemsContext } from "@/app/Context/CartContext";
import { useContext } from "react";
import toast from "react-hot-toast";

const CartToggleBtn = ({ specificFood }) => {
    const { cartItem, setCartItem } = useContext(CartItemsContext)
    const handleCartBtn = () => {
        setCartItem([...cartItem, specificFood])
        toast.success("Item added to cart!", {
            duration: 1000,
        });
    }
    return (
        <button
            onClick={handleCartBtn}
            className="flex-1 min-w-0 bg-orange-500 text-white py-1.5 sm:py-2 px-1 sm:px-2 text-[10px] sm:text-sm rounded-sm hover:bg-orange-600 transition whitespace-nowrap"
        >
            Add Cart
        </button>
    );
};

export default CartToggleBtn;