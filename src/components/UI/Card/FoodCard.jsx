'use client'
import CartToggleBtn from "@/components/Menu/CartToggleBtn";
import Image from "next/image";
import Link from "next/link";

const FoodCard = ({ specificFood }) => {
    
    const {
        id,
        image_link,
        dish_name,
        category,
        price,
        rating
    } = specificFood
    return (
        <div>
            <div className="bg-white rounded-sm shadow-md hover:shadow-xl transition duration-300 overflow-hidden">

                {/* Image */}
                <div className="h-56 bg-gray-100 flex justify-center items-center">
                    <Image
                        src={image_link}
                        alt={dish_name}
                        width={250}
                        height={250}
                        className="w-full h-full object-cover"
                    />
                </div>


                {/* Content */}
                <div className="p-5">

                    {/* Category */}
                    <p className="text-sm text-orange-500 font-medium">
                        {category}
                    </p>


                    {/* Title */}
                    <h2 className="text-xl font-bold text-gray-800 mt-2 line-clamp-1">
                        {dish_name}
                    </h2>


                    {/* Description optional */}
                    <p className="text-gray-500 text-sm mt-2 line-clamp-2">
                        Delicious food prepared with fresh ingredients.
                    </p>


                    {/* Price & Rating */}
                    <div className="flex justify-between items-center mt-4">

                        <span className="text-xl font-bold text-green-600">
                            ${price}
                        </span>
                        <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
                            ⭐ {rating}
                        </span>

                    </div>


                    {/* Buttons */}
                    <div className="flex gap-3 mt-5">
                    <Link href={`/FoodDetails/${id}`} className="flex-1 text-center border border-gray-300 py-2 rounded-sm hover:bg-gray-100 transition">
                         Details
                    </Link>

                        {/*For Cart Button Toggle*/}
                        <CartToggleBtn specificFood={specificFood}></CartToggleBtn>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;