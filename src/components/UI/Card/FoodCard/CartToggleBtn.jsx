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
        <button onClick={handleCartBtn} className="flex-1 bg-orange-500 text-white py-2 rounded-sm hover:bg-orange-600 transition">
            Add Cart
        </button>
    );
};

export default CartToggleBtn;