'use client'

import Image from "next/image";
import Link from "next/link";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="text-center">

        {/* Image */}
        <Image
          src="/images/error-404.png"
          alt="Error"
          width={200}
          height={200}
          />

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-gray-500 mt-3 max-w-md mx-auto">
          Sorry, the page you are looking for doesn’t exist or has been moved.
        </p>

        {/* Button */}
        <Link href="/">
          <button className="btn mt-6 bg-[#7C4DFF] hover:bg-[#6c3df5] text-white border-none px-6">
            Go Back Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;