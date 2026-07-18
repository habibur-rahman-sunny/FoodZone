"use client";

import { ShoppingCart } from "lucide-react";
import { CartItemsContext } from "@/app/Context/CartContext";
import { useContext } from "react";

const CartIcon = () => {
  const { cartItem } = useContext(CartItemsContext);

  return (
      <div className="relative cursor-pointer">
        <ShoppingCart size={28} className="text-gray-700" />

        <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
          {cartItem?.length || 0}
        </span>
      </div>
  );
};

export default CartIcon;