'use client';

import { useContext } from "react";
import { CartItemsContext } from "../Context/CartContext";
import CartCard from "@/components/UI/Card/CartCard/CartCard";
import Link from "next/link";

const CartPageClient = () => {
    const { cartItem } = useContext(CartItemsContext);

    const totalPrice = cartItem.reduce((acc, item) => {
        return acc + item.price;
    }, 0);

    return (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8 flex flex-col justify-between h-162.5">

            {/* Header */}
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                Listed Items
                <span className="text-sm font-semibold text-green-600 bg-gray-100 px-2.5 py-0.5 rounded-full">
                    {cartItem.length}
                </span>
            </h2>

            {/* Item List Container (Fixed Height & Scrollable) */}
            <div className="flex-1 overflow-y-auto pr-2 my-2 space-y-4 custom-scrollbar">
                {cartItem.length === 0 ? (
                    <div className="text-center py-12 flex flex-col items-center justify-center h-full">
                        <div className="text-5xl mb-4 animate-bounce">🛒</div>
                        <h3 className="text-lg font-semibold text-gray-900">Your cart is empty</h3>
                        <p className="text-gray-500 mt-1 text-sm">Add your favourite food to continue.</p>
                    </div>
                ) : (
                    <div className="space-y-4 divide-y divide-gray-100">
                        {cartItem.map((listedItem, index) => (
                            <div key={index} className="pt-4 first:pt-0">
                                <CartCard listedItem={listedItem} />
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Order Summary (Bottom fixed section) */}
            <div className="border-t border-gray-100 pt-4 mt-auto">
                <h3 className="font-bold text-lg text-gray-900 mb-3">Order Summary</h3>
                <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex justify-between">
                        <span>Subtotal</span>
                        <span className="font-medium text-gray-900">{totalPrice.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Delivery</span>
                        <span className="text-green-600 font-medium">Free</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Discount</span>
                        <span className="text-red-500 font-medium">-0.00</span>
                    </div>
                    <div className="border-t border-gray-100 pt-2 flex justify-between font-bold text-base text-gray-900">
                        <span>Total</span>
                        <span className="text-violet-600">{totalPrice.toFixed(2)}</span>
                    </div>

                    <div className="flex justify-center">
                        <Link href="/Checkout" className="w-full max-w-xs">
                            <button className="w-full py-4 rounded-2xl bg-linear-to-r from-violet-600 to-purple-600 text-white font-bold text-lg">
                                Proceed to Checkout →
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CartPageClient;