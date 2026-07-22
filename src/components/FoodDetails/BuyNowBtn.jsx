"use client";

import { useRouter } from "next/navigation";
const BuyNowButton = () => {
    const router = useRouter();

    //Buy Now click করলে check করবে user login আছে কিনা
    const handleBuyNow = () => {
        const user = localStorage.getItem("user");
        if (user) {
            // user login করা আছে
            router.push("/Checkout");
        }
        else {
            // user login করা নেই
            router.push("/login");
        }
    };

    return (

        <button
            onClick={() => router.push("/login")}
            className="bg-black text-white py-2 rounded-sm font-semibold">Buy Now
        </button>
    );
};

export default BuyNowButton;