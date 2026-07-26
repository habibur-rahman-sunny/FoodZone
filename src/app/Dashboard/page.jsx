import {
    FaBoxOpen,
    FaShoppingCart,
    FaMoneyBillWave,
    FaStar,
    FaUserEdit,
    FaClipboardList,
    FaCreditCard,
} from "react-icons/fa";

// Title
export const metadata = {
    title: "Dashboard | FoodZone",
};

const stats = [
    {
        title: "Total Orders",
        value: 12,
        icon: <FaBoxOpen className="text-3xl text-violet-600" />,
    },
    {
        title: "Cart Items",
        value: 3,
        icon: <FaShoppingCart className="text-3xl text-green-600" />,
    },
    {
        title: "Total Spent",
        value: "$145",
        icon: <FaMoneyBillWave className="text-3xl text-orange-500" />,
    },
    {
        title: "Rating",
        value: "4.9",
        icon: <FaStar className="text-3xl text-yellow-500" />,
    },
];

const recentOrders = [
    {
        food: "Pizza",
        status: "Delivered",
    },
    {
        food: "Burger",
        status: "Pending",
    },
    {
        food: "Cold Coffee",
        status: "Delivered",
    },
    {
        food: "Chicken Fry",
        status: "Processing",
    },
];

const DashboardPage = () => {
    return (
        <div className="bg-gray-50">
            <div className="min-h-screen p-6 w-11/12 mx-auto">

                {/* Welcome */}
                <div className="bg-white rounded-2xl shadow p-6 mb-8">
                    <h1 className="text-3xl font-bold">
                        👋 Welcome Back
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Here is a quick overview of your account.
                    </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">

                    {stats.map((item) => (
                        <div
                            key={item.title}
                            className="bg-white rounded-2xl shadow p-6 flex justify-between items-center"
                        >
                            <div>
                                <p className="text-gray-500">
                                    {item.title}
                                </p>

                                <h2 className="text-3xl font-bold mt-2">
                                    {item.value}
                                </h2>
                            </div>

                            {item.icon}
                        </div>
                    ))}

                </div>

                {/* Recent + Actions */}
                <div className="grid lg:grid-cols-3 gap-6">

                    {/* Recent Orders */}
                    <div className="lg:col-span-2 bg-white rounded-2xl shadow p-6">

                        <h2 className="text-xl font-bold mb-5">
                            🕒 Recent Orders
                        </h2>

                        <div className="space-y-4">

                            {recentOrders.map((item) => (
                                <div
                                    key={item.food}
                                    className="flex justify-between items-center border-b pb-3"
                                >
                                    <span className="font-medium">
                                        🍔 {item.food}
                                    </span>

                                    <span
                                        className={`text-sm font-semibold ${item.status === "Delivered"
                                                ? "text-green-600"
                                                : item.status === "Pending"
                                                    ? "text-orange-500"
                                                    : "text-blue-500"
                                            }`}
                                    >
                                        {item.status}
                                    </span>
                                </div>
                            ))}

                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="bg-white rounded-2xl shadow p-6">

                        <h2 className="text-xl font-bold mb-5">
                            ⚡ Quick Actions
                        </h2>

                        <div className="space-y-4">

                            <button className="w-full bg-violet-600 text-white py-3 rounded-xl hover:bg-violet-700 transition flex justify-center items-center gap-2">
                                <FaUserEdit />
                                Edit Profile
                            </button>

                            <button className="w-full bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition flex justify-center items-center gap-2">
                                <FaShoppingCart />
                                View Cart
                            </button>

                            <button className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition flex justify-center items-center gap-2">
                                <FaCreditCard />
                                Checkout
                            </button>

                            <button className="w-full bg-orange-500 text-white py-3 rounded-xl hover:bg-orange-600 transition flex justify-center items-center gap-2">
                                <FaClipboardList />
                                All Orders
                            </button>

                        </div>

                    </div>

                </div>

                {/* Recommended */}
                <div className="bg-white rounded-2xl shadow p-6 mt-8">

                    <h2 className="text-xl font-bold mb-5">
                        ❤️ Recommended Foods
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

                        {["Burger", "Pizza", "Taco", "Fries"].map((food) => (
                            <div
                                key={food}
                                className="border rounded-xl p-6 text-center hover:shadow-lg transition cursor-pointer"
                            >
                                <div className="text-5xl mb-3">
                                    🍔
                                </div>

                                <h3 className="font-semibold">
                                    {food}
                                </h3>
                            </div>
                        ))}

                    </div>

                </div>

            </div>
        </div>

    );
};

export default DashboardPage;