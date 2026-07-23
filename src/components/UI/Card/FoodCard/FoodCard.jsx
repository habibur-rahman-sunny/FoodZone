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
                        className={`bg-gray-100 flex justify-center items-center overflow-hidden ${
                            isCart ? "h-32" : "h-56"
                        }`}
                    >
                        <div
                            className={`relative ${
                                isCart ? "w-28 h-28" : "w-full h-full"
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
                            className={`text-orange-500 font-medium ${
                                isCart ? "text-xs" : "text-sm"
                            }`}
                        >
                            {category}
                        </p>

                        {/* Title */}
                        <h2
                            className={`font-bold text-gray-800 mt-2 line-clamp-1 ${
                                isCart ? "text-lg" : "text-2xl"
                            }`}
                        >
                            {dish_name}
                        </h2>

                        {/* Description */}
                        {description() && (
                            <p className="text-gray-500 text-sm mt-2 line-clamp-2">
                                {description()}
                            </p>
                        )}

                        {/* Price & Rating */}
                        <div className="flex justify-between items-center mt-auto pt-4">

                            <span
                                className={`font-bold text-green-600 ${
                                    isCart ? "text-lg" : "text-3xl"
                                }`}
                            >
                                ${price}
                            </span>

                            <span
                                className={`bg-yellow-100 text-yellow-700 rounded-full ${
                                    isCart
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
                <div className={isCart ? "p-3 pt-0" : "p-5 pt-0"}>
                    <div className={`flex ${isCart ? "gap-2 mt-3" : "gap-3 mt-5"}`}>

                        <Link
                            href={`/FoodDetails/${id}`}
                            className={`flex-1 text-center border border-gray-300 rounded-sm hover:bg-gray-100 transition ${
                                isCart
                                    ? "py-1.5 text-sm"
                                    : "py-2 text-base"
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