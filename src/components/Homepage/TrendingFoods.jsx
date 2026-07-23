import Link from "next/link";
import FoodCard from "../UI/Card/FoodCard/FoodCard";

const TrendingFoods = async ({ from }) => {
  let FoodData = [];

  try {
    const res = await fetch(
      "https://phi-lab-server.vercel.app/api/v1/lab/foods"
    );
    const data = await res.json();
    FoodData = data.data || [];
  } catch (error) {
    console.log(error);
  }

  // ১. dynamic slice limit নির্ধারণ
  let limit = FoodData.length;
  if (from === "Homepage") {
    limit = 8;
  }  else if (from === "Menu") {
    limit = FoodData.length; 
  } else {
    limit = 6; 
  }

  // ২. Dynamic Heading নির্ধারণ
  const getHeading = () => {
    if (from === "Homepage") return "Trending Foods";
    if (from === "Menu") return "All Food Items";
    return "You May Also Like";
  };

  // ৩. Dynamic Subtitle নির্ধারণ
  const getSubTitle = () => {
    if (from === "Homepage")
      return "Discover the most popular and delicious dishes loved by food enthusiasts.";
    if (from === "Menu")
      return "Explore our complete list of delicious meals prepared just for you.";
    return "Add some extra treats to your order before checkout!";
  };

  return (
    <div>
      <section className="max-w-7xl mx-auto px-4 py-10">
        
        {/* Header Section */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-900">
            {getHeading()}
          </h2>
          {getSubTitle() && (
            <p className="text-gray-500 mt-2">{getSubTitle()}</p>
          )}
        </div>

        {/* Food Grid */}
        <div
          className={`grid grid-cols-1 gap-10 justify-items-center ${
            from === "Cart"
              ? "md:grid-cols-2 lg:grid-cols-3"
              : "md:grid-cols-2 lg:grid-cols-4"
          }`}
        >
          {FoodData.slice(0, limit).map((specificFood) => (
            <FoodCard key={specificFood.id} specificFood={specificFood} from={from} />
          ))}
        </div>

      </section>

      {/* See More Button for Homepage */}
      {from === "Homepage" && (
        <div className="text-center py-10">
          <Link href="/Menu">
            <button className="btn bg-purple-500 text-white hover:bg-purple-600 transition-colors px-6 py-2 rounded-lg font-medium">
              See more
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default TrendingFoods;