'use client';

import { useContext, useState } from "react";
import { CartItemsContext } from "../Context/CartContext";
import CartCard from "@/components/UI/Card/CartCard/CartCard";

// আপনি চাইলে এই স্টেটগুলোর জন্য কোন লাইব্রেরি (যেমন: react-country-state-city) বা কাস্টম ডাটা ব্যবহার করতে পারেন।
// এখানে উদাহরণের জন্য খালি রাখা হয়েছে।
const countries = ["Bangladesh", "India", "USA", "UK"]; 
const cities = ["Dhaka", "Chittagong", "Sylhet"];
const states = ["Dhaka Division", "Chittagong Division"];

const CheckoutPage = () => {
  const { cartItem } = useContext(CartItemsContext);
  const [agreed, setAgreed] = useState(false);

  const totalPrice = cartItem.reduce((acc, item) => {
    return acc + item.price;
  }, 0);

  return (
    <section className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-screen bg-gray-50/50">
      
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
          Checkout
        </h1>
        <p className="text-base text-gray-500 mt-3 max-w-md mx-auto">
          Complete your order and enjoy delicious food delivered straight to your door.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-12 items-start">

        {/* LEFT: Shipping Details */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-violet-100 text-violet-600 text-sm font-bold">1</span>
            Shipping & Contact Details
          </h2>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full border border-gray-200 rounded-xl p-3 text-sm outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-50"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Email Address</label>
                <input
                  type="email"
                  placeholder="johndoe@example.com"
                  className="w-full border border-gray-200 rounded-xl p-3 text-sm outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-50"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Phone Number</label>
                <input
                  type="tel"
                  placeholder="+880 1XXXXXXXXX"
                  className="w-full border border-gray-200 rounded-xl p-3 text-sm outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-50"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Country</label>
                <select className="w-full border border-gray-200 rounded-xl p-3 text-sm outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-50 bg-white">
                  <option value="">Select Country</option>
                  {countries.map(country => <option key={country} value={country}>{country}</option>)}
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">City</label>
                <select className="w-full border border-gray-200 rounded-xl p-3 text-sm outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-50 bg-white">
                  <option value="">Select City</option>
                  {cities.map(city => <option key={city} value={city}>{city}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">State / Region</label>
                <select className="w-full border border-gray-200 rounded-xl p-3 text-sm outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-50 bg-white">
                  <option value="">Select State</option>
                  {states.map(state => <option key={state} value={state}>{state}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Zip / Postal Code</label>
                <input
                  type="text"
                  placeholder="1200"
                  className="w-full border border-gray-200 rounded-xl p-3 text-sm outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-50"
                />
              </div>
            </div>

            {/* Terms & Conditions Checkbox */}
            <div className="flex items-start gap-3 pt-4">
              <input 
                type="checkbox" 
                id="terms" 
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-1 h-4 w-4 rounded border-gray-300 text-violet-600 focus:ring-violet-500"
              />
              <label htmlFor="terms" className="text-sm text-gray-600">
                I agree to the <a href="#" className="text-violet-600 font-medium hover:underline">Terms & Conditions</a> and <a href="#" className="text-violet-600 font-medium hover:underline">Privacy Policy</a>.
              </label>
            </div>

            <button
              type="submit"
              disabled={!agreed}
              className={`w-full mt-6 py-4 rounded-xl font-semibold shadow-md transition-all duration-200 ${agreed ? 'bg-violet-600 hover:bg-violet-700 text-white active:scale-[0.98] shadow-violet-200' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
            >
              Proceed to Payment
            </button>
          </form>
        </div>

        {/* RIGHT: Cart & Order Details */}
        <div className="space-y-8 lg:sticky lg:top-8">
          
          {/* Your Order (Cart Items) */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
               <span className="flex items-center justify-center w-8 h-8 rounded-full bg-violet-100 text-violet-600 text-sm font-bold">2</span>
              Your Order
              <span className="text-sm font-semibold text-green-600 bg-gray-100 px-2.5 py-0.5 rounded-full">
                {cartItem.length} items
              </span>
            </h2>

            <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
              {cartItem.length === 0 ? (
                <p className="text-gray-500 text-sm text-center py-4">Your cart is empty.</p>
              ) : (
                cartItem.map((listedItem, index) => (
                  <div key={index} className="pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                    <CartCard listedItem={listedItem} />
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8">
            <h3 className="font-bold text-xl text-gray-900 mb-6">
              Order Summary
            </h3>

            <div className="space-y-4 text-sm text-gray-600">
              <div className="flex justify-between items-center">
                <span>Subtotal</span>
                <span className="font-medium text-gray-900">${totalPrice.toFixed(2)}</span>
              </div>

              <div className="flex justify-between items-center">
                <span>Delivery</span>
                <span className="text-green-600 font-medium">Free</span>
              </div>

              <div className="flex justify-between items-center">
                <span>Discount</span>
                <span className="text-red-500 font-medium">-$0.00</span>
              </div>

              <div className="border-t border-gray-100 pt-4 flex justify-between items-center text-base font-bold text-gray-950">
                <span>Total</span>
                <span className="text-xl text-violet-600">${totalPrice.toFixed(2)}</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CheckoutPage;