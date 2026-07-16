// import AppCard from "../../../UI/Card/AppCard";
import Link from "next/link";
import AppCard from "../UI/Card/AppCard";

const TrendingApps = async ({ from }) => {
    const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/foods");
    const data = await res.json();
    const FoodData = data.data;
    return (
        <div>
            <section className="max-w-7xl mx-auto px-4 py-10">

                {/* Title Section */}
                <div className="text-center mb-10">
                    <h2 className="text-4xl font-bold text-gray-900">
                        {from === "Homepage" ? "Trending Foods" : "All Food Items"}
                    </h2>
                    <p className="text-gray-500 mt-2">
                        Discover the most popular and delicious dishes loved by food enthusiasts.
                    </p>
                </div>


                {/* Cards */}
                {
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center">

                        {FoodData.slice(0, from === "Homepage" ? 8 : (FoodData.length - 1)).map((specificFood, index) => (
                            <AppCard
                                key={index}
                                specificFood={specificFood}
                            />
                        ))
                        }

                    </div>
                }

            </section>
            {from === "Homepage" ?
                <div className="text-center py-10">
                    <Link href={"/App"}><button className="btn bg-purple-500 text-white" >See more</button></Link>
                </div>
                : ""
            }
        </div>
    );
};

export default TrendingApps;