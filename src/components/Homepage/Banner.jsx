import Image from "next/image";

import foodItemsImg from "../../../public/images/FoodItems.png";

const Banner = () => {
    return (
        <div>
            <section className="bg-gray-100 pt-10 px-4 text-center overflow-hidden">
                <div className="max-w-4xl mx-auto">
                    {/* Title */}
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                        Delicious Food Delivered
                        <span className="text-purple-600">
                            {" "}Fresh Taste,
                        </span>{" "}
                        Happy Moments
                    </h1>

                    {/* Description */}
                    <p className="text-gray-500 text-lg md:text-xl mb-8 leading-relaxed">
                        Explore delicious meals prepared with fresh ingredients.
                        Order your favorite dishes and enjoy your favorite food
                        at your doorstep.
                    </p>
                </div>

                {/* Banner Image */}
                <div className="mt-8 w-full max-w-5xl mx-auto flex justify-center">
                    <Image
                        className="rounded-t-2xl w-full h-auto object-contain"
                        src={foodItemsImg}
                        alt="Food Items"
                        width={1200}
                        height={1200}
                        priority
                    />
                </div>
            </section>
        </div>
    );
};

export default Banner;