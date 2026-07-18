import {
    Star,
    Phone,
    MessageCircle,
    Flame,
    Utensils,
} from "lucide-react";
import Image from "next/image";
import CartToggleBtn from "../Menu/CartToggleBtn";

// FoodDetails Component (আলাদা ফাইল না রেখে এখানেই যুক্ত করা হলো)
const FoodDetails = ({ specificFood }) => {
    // Object Destructuring
    const {
        id,
        image_link,
        dish_name,
        category,
        rating,
        cuisine,
        price,
        approximate_nutrition_per_serving,
        main_ingredients,
        cooking_steps
    } = specificFood || {};

    // Nutrition data destructuring
    const {
        calories,
        protein,
        carbohydrates,
        fat,
        fiber
    } = approximate_nutrition_per_serving || {};

    return (
        <div className="max-w-7xl mx-auto px-5 py-10">
            {/* Main Section */}
            <div className="grid lg:grid-cols-2 gap-10">

                {/* Left Side */}
                <div>
                    {/* Image Placeholder */}
                    <div className="h-112.5 text-gray-500 rounded-3xl bg-gray-200 flex items-center justify-center">
                        <Image
                        src={image_link}
                        alt={id}
                        width={300}
                        height={112.5}
                        >
                            
                        </Image>
                    </div>

                    {/* About */}
                    <div className="mt-8 border-l-4 border-orange-500 pl-5">
                        <h3 className="text-xl font-bold text-gray-900">
                            About this dish
                        </h3>
                        <p className="text-gray-600 mt-3 leading-relaxed">
                            {dish_name} is a delicious and healthy meal
                            prepared with fresh ingredients. It combines grilled
                            chicken, fragrant rice and fresh vegetable salad
                            for a balanced meal.
                        </p>
                    </div>
                </div>

                {/* Right Side */}
                <div>
                    {/* Category + Rating */}
                    <div className="flex justify-between items-center">
                        <span className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm">
                            🍽 {category}
                        </span>

                        <div className="flex items-center gap-2">
                            <Star
                                size={20}
                                className="fill-yellow-400 text-yellow-400"
                            />
                            <span className="font-semibold">
                                {rating}.0
                            </span>
                        </div>
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl font-bold text-gray-900 mt-5 leading-tight">
                        {dish_name}
                    </h1>

                    <p className="text-gray-600 mt-4">
                        {cuisine}
                    </p>

                    {/* Price */}
                    <div className="mt-5">
                        <h2 className="text-3xl font-bold text-orange-500">
                            BDT {price}
                        </h2>
                        <p className="text-sm text-gray-500">
                            Approx. {calories}
                        </p>
                    </div>

                    {/* Buttons Section */}
                    <div className="grid grid-cols-2 gap-4 mt-8">
                        <CartToggleBtn specificFood={specificFood}></CartToggleBtn>

                        <button className="bg-black text-white py-2 rounded-sm transition font-semibold">
                            Buy Now
                        </button>

                        <button className="bg-green-600 text-white py-2 rounded-sm transition flex justify-center items-center gap-2 font-semibold">
                            <MessageCircle size={20}/>
                            Whatsapp
                        </button>

                        <button className="bg-blue-600 text-white py-2 rounded-sm transition flex justify-center items-center gap-2 font-semibold">
                            <Phone size={20}/>
                            Call Order
                        </button>
                    </div>
                </div>
            </div>

            {/* Details Section */}
            <section className="mt-20">
                <h2 className="text-3xl font-bold mb-8">
                    Food Details
                </h2>

                <div className="grid md:grid-cols-3 gap-6">
                    {/* Nutrition */}
                    <div className="p-6 rounded-2xl shadow border">
                        <div className="flex items-center gap-2 mb-4">
                            <Flame className="text-orange-500"/>
                            <h3 className="font-bold text-xl">
                                Nutrition
                            </h3>
                        </div>

                        <p>Protein: <b>{protein}</b></p>
                        <p>Carbs: <b>{carbohydrates}</b></p>
                        <p>Fat: <b>{fat}</b></p>
                        <p>Fiber: <b>{fiber}</b></p>
                    </div>

                    {/* Ingredients */}
                    <div className="p-6 rounded-2xl shadow border">
                        <div className="flex items-center gap-2 mb-4">
                            <Utensils className="text-green-600"/>
                            <h3 className="font-bold text-xl">
                                Ingredients
                            </h3>
                        </div>

                        <ul className="space-y-2 text-gray-600">
                            {main_ingredients?.slice(0, 5).map((item, index) => (
                                <li key={index}>
                                    • {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Rating */}
                    <div className="p-6 rounded-2xl shadow border">
                        <div className="flex items-center gap-2 mb-4">
                            <Star className="fill-yellow-400 text-yellow-400"/>
                            <h3 className="font-bold text-xl">
                                Customer Rating
                            </h3>
                        </div>

                        <h1 className="text-5xl font-bold">
                            {rating}/5
                        </h1>

                        <p className="text-gray-500 mt-3">
                            Based on customer reviews
                        </p>
                    </div>
                </div>

                {/* Cooking Steps */}
                <div className="mt-10">
                    <h3 className="text-2xl font-bold mb-5">
                        Cooking Process
                    </h3>

                    <div className="space-y-4">
                        {cooking_steps?.map((step, index) => (
                            <div key={index} className="p-4 bg-gray-50 rounded-xl">
                                <span className="font-bold">
                                    Step {index + 1}:
                                </span>
                                {" "}{step}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};
export default FoodDetails