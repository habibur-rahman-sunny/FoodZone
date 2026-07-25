import Image from "next/image";
import Link from "next/link";

const AppNotFound = ({ title, message }) => {
    return (
        <div className="flex flex-col items-center justify-center py-24 text-center">
            <Image
                src="/images/App-Error.png"
                alt="Not Found"
                width={200}
                height={200}            />

            <h2 className="text-4xl font-bold text-[#001D3D] mb-4">
                {title}
            </h2>

            <p className="text-gray-500 text-lg max-w-xl">
                {message}
            </p>
            <Link href="/Checkout">
                <button className="btn mt-6 bg-[#7C4DFF] hover:bg-[#6c3df5] text-white border-none px-6">
                    Go Back Checkout
                </button>
            </Link>
        </div>
    );
};

export default AppNotFound;