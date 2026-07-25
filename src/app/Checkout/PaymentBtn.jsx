"use client";

import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const PaymentBtn = ({ agreed }) => {
  const router = useRouter();

  const handleCheckout = () => {
    const token = localStorage.getItem("token");

    if (token) {
      router.push("/Payment");
    } else {
      toast.error("Please login to proceed with payment!");
      router.push("/login");
    }
  };

  return (
    <button
      onClick={handleCheckout}
      type="button"
      disabled={!agreed}
      className={`w-full mt-6 py-4 rounded-xl font-semibold shadow-md transition-all duration-200 ${
        agreed
          ? "bg-violet-600 hover:bg-violet-700 text-white active:scale-[0.98] shadow-violet-200"
          : "bg-gray-300 text-gray-500 cursor-not-allowed"
      }`}
    >
      Proceed to Payment
    </button>
  );
};

export default PaymentBtn;