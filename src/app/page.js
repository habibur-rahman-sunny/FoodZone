import Banner from "@/components/Homepage/Banner";
import FoodMarquee from "@/components/Homepage/FoodMarque";
import Reviews from "@/components/Homepage/Reviews";
import States from "@/components/Homepage/States";
import TrendingFoods from "@/components/Homepage/TrendingFoods";
import { GetFoods } from "./Lib/GetFoods/GetFoods";

// Title
export const metadata = {
  title: "Homepage | FoodZone",
};

const Home = async ()=> {

  const FoodsData = await GetFoods();
      
  return (
    <div >
      <Banner></Banner>
      <States></States>
      <TrendingFoods from="Homepage" FoodsData={FoodsData}></TrendingFoods>
      <FoodMarquee></FoodMarquee>
      <Reviews></Reviews>
    </div>
  );
}

export default Home;
