'use client';

import Image from "next/image";
import Link from "next/link";
import CartToggleBtn from "./CartToggleBtn";

const FoodCard = ({ specificFood, from }) => {

    const {
        id,
        image_link,
        dish_name,
        category,
        price,
        rating
    } = specificFood;

    const description = () => {
        if (from === "Cart") return "";
        return "Delicious food prepared with fresh ingredients.";
    };

    const isCart = from === "Cart";

    return (
        <div className="h-full w-full">
            <div className="bg-white rounded-sm shadow-md hover:shadow-xl transition duration-300 overflow-hidden flex flex-col justify-between h-full w-full">

                {/* Top Section */}
                <div className="flex flex-col grow">
                    {/* Image */}
                    <div
                        className={`bg-gray-100 flex justify-center items-center overflow-hidden ${isCart ? "h-24 sm:h-32" : "h-24 sm:h-40 md:h-56"
                            }`}
                    >
                        <div
                            className={`relative ${isCart ? "w-28 h-28" : "w-full h-full"
                                }`}
                        >
                            <Image
                                src={image_link}
                                alt={dish_name}
                                width={400}
                                height={400}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Content */}
                    <div className={`flex flex-col grow ${isCart ? "p-3" : "p-5"}`}>

                        {/* Category */}
                        <p
                            className={`text-orange-500 font-medium ${isCart ? "text-xs" : "text-sm"
                                }`}
                        >
                            {category}
                        </p>

                        {/* Title */}
                        <h2
                            className={`font-bold text-gray-800 mt-2 line-clamp-1 ${isCart ? "text-lg" : "text-2xl"
                                }`}
                        >
                            {dish_name}
                        </h2>

                        {/* Description */}
                        {description() && (
                            <p className="hidden sm:block text-gray-500 text-sm mt-2 line-clamp-2">
                                {description()}
                            </p>
                        )}

                        {/* Price & Rating */}
                        <div className="flex justify-between items-center mt-auto pt-2">

                            <span
                                className={`font-bold text-green-600 ${isCart ? "text-lg" : "text-2xl"
                                    }`}
                            >
                                {price}
                            </span>

                            <span
                                className={`bg-yellow-100 text-yellow-700 rounded-full ${isCart
                                    ? "px-2 py-1 text-xs"
                                    : "px-3 py-1 text-sm"
                                    }`}
                            >
                                ⭐ {rating}
                            </span>

                        </div>

                    </div>
                </div>
                {/* Bottom Section (Buttons) */}
                <div className={isCart ? "p-2 sm:p-3 pt-0" : "p-2 sm:p-5 pt-0"}>
                    <div
                        className={`flex w-full ${isCart
                            ? "gap-1.5 sm:gap-2 mt-1 sm:mt-0"
                            : "gap-1.5 sm:gap-3 mt-1 sm:mt-0"
                            }`}
                    >

                        <Link
                            href={`/FoodDetails/${id}`}
                            className={`flex-1 min-w-0 text-center border border-gray-300 rounded-sm hover:bg-gray-100 transition whitespace-nowrap ${isCart
                                ? "py-1 text-[10px] sm:py-1.5 sm:text-sm"
                                : "py-1.5 px-1 text-[10px] sm:py-2 sm:px-2 sm:text-sm md:text-base"
                                }`}
                        >
                            Details
                        </Link>

                        <CartToggleBtn
                            specificFood={specificFood}
                            from={from}
                        />

                    </div>
                </div>

            </div>
        </div>
    );
};

export default FoodCard;