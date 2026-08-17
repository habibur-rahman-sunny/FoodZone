"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const FoodMarquee = () => {

    const [foodData, setFoodData] = useState([]);


    useEffect(() => {

        const loadFood = async () => {

            const res = await fetch(
                "https://phi-lab-server.vercel.app/api/v1/lab/foods"
            );

            const data = await res.json();

            setFoodData(data.data);

        };

        loadFood();

    }, []);


    // Food Mini Card
    const FoodMiniCard = ({ food }) => {

        const {
            image_link,
            dish_name
        } = food;


        return (
            <div className="w-20 sm:w-28 mx-3 sm:mx-6 md:mx-10 bg-white rounded-lg shadow-sm overflow-hidden">

                {/* Image */}
                <div className="h-14 sm:h-20">

                    <Image
                        src={image_link}
                        alt={dish_name}
                        width={120}
                        height={80}
                        className="w-full h-full object-cover"
                    />

                </div>


                {/* Name */}
                <div className="p-1.5 sm:p-2">

                    <h3 className="text-[9px] sm:text-xs font-medium text-gray-700 line-clamp-1">
                        {dish_name}
                    </h3>

                </div>

            </div>
        );
    };


    // Section
    return (

        <section className="my-6 sm:my-10 overflow-hidden">

            <div className="max-w-7xl mx-auto px-3 sm:px-4">


                {/* Section Header */}
                <div className="text-center mb-4 sm:mb-6">

                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
                        Food Items
                    </h2>

                    <p className="text-xs sm:text-sm text-gray-500 mt-1">
                        Take a look at a glance
                    </p>

                </div>


                {/* First Marquee */}
                <Marquee
                    speed={50}
                    pauseOnHover
                >

                    {
                        foodData.map(food => (

                            <FoodMiniCard
                                key={food.id}
                                food={food}
                            />

                        ))
                    }

                </Marquee>


                {/* Second Marquee */}
                <div className="mt-3 sm:mt-4">

                    <Marquee
                        direction="right"
                        speed={50}
                        pauseOnHover
                    >

                        {
                            foodData.map(food => (

                                <FoodMiniCard
                                    key={food.id}
                                    food={food}
                                />

                            ))
                        }

                    </Marquee>

                </div>

            </div>

        </section>

    );

};


export default FoodMarquee;