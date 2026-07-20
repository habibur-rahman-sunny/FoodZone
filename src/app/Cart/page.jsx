'use client';

import { useContext } from "react";
import { CartItemsContext } from "../Context/CartContext";
import CartCard from "@/components/UI/Card/CartCard/CartCard";


const CartPage = () => {
  const { cartItem } = useContext(CartItemsContext);
  const totalPrice = cartItem.reduce((acc, item)=>{
    return acc+item.price
  }, 0) // 0 = initial value. It will throw an error if you don't provide it.

  return (
    <section className="max-w-11/12 mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-screen bg-gray-50/50">
      
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
          Checkout
        </h1>
        <p className="text-base text-gray-500 mt-3 max-w-md mx-auto">
          Complete your order and enjoy delicious food delivered straight to your door.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 items-start">

        {/* LEFT: Items & Summary */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Listed Items Card */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              Listed Items
              <span className="text-sm font-semibold text-green-600 bg-gray-100 px-2.5 py-0.5 rounded-full animate-bounce">
                {cartItem.length}
              </span>
            </h2>

            <div className="space-y-4 min-h-62.6 flex flex-col justify-center">
              {cartItem.length === 0 ? (
                <div className="text-center py-12">
                  <div className="text-5xl mb-4 animate-bounce">🛒</div>
                  <h3 className="text-lg font-semibold text-gray-900">Your cart is empty</h3>
                  <p className="text-gray-500 mt-1 text-sm">Add your favourite food to continue.</p>
                </div>
              ) : (
                <div className="space-y-4 divide-y divide-gray-100">
                  {cartItem.map((listedItem, index) => (
                    <div key={index}  className="pt-4 first:pt-0">
                      <CartCard listedItem={listedItem} />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Order Summary Card */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8">
            <h3 className="font-bold text-xl text-gray-900 mb-6">
              Order Summary
            </h3>

            <div className="space-y-4 text-sm text-gray-600">
              <div className="flex justify-between items-center">
                <span>Subtotal</span>
                <span className="font-medium text-gray-900">{totalPrice}</span>
              </div>

              <div className="flex justify-between items-center">
                <span>Delivery</span>
                <span className="text-green-600 font-medium">Free</span>
              </div>

              <div className="flex justify-between items-center">
                <span>Discount</span>
                <span className="text-red-500 font-medium">-0.00</span>
              </div>

              <div className="border-t border-gray-100 pt-4 flex justify-between items-center text-base font-bold text-gray-950">
                <span>Total</span>
                <span className="text-xl text-violet-600">{totalPrice}</span>
              </div>
            </div>
          </div>

        </div>

        {/* RIGHT: Shipping Details */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8 lg:sticky lg:top-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Shipping Details
          </h2>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Full Name</label>
              <input
                type="text"
                placeholder="name"
                className="w-full border border-gray-200 rounded-xl p-3 text-sm outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-50"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Email Address</label>
              <input
                type="email"
                placeholder="email"
                className="w-full border border-gray-200 rounded-xl p-3 text-sm outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-50"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Area</label>
                <input
                  type="text"
                  placeholder="area"
                  className="w-full border border-gray-200 rounded-xl p-3 text-sm outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-50"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">District</label>
                <input
                  type="text"
                  placeholder="district"
                  className="w-full border border-gray-200 rounded-xl p-3 text-sm outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-50"
                />
              </div>
            </div>

            <button
              className="w-full mt-4 py-4 rounded-xl bg-violet-600 hover:bg-violet-700 active:scale-[0.98] text-white font-semibold shadow-md shadow-violet-200 transition-all duration-200"
            >
              Proceed to Payment
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default CartPage;