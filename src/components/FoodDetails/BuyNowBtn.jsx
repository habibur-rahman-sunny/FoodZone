"use client";

import { useRouter } from "next/navigation";


const BuyNowButton = () => {

    const router = useRouter();


    const handleBuyNow = () => {


        const token = localStorage.getItem("token");


        if(token){

            // Login করা আছে
            router.push("/Checkout");

        }
        else{

            // Login করা নেই
            router.push("/login");

        }

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