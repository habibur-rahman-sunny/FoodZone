import Banner from "@/components/Homepage/Banner";
import FoodMarquee from "@/components/Homepage/FoodMarque";
import Reviews from "@/components/Homepage/Reviews";
import States from "@/components/Homepage/States";
import TrendingFoods from "@/components/Homepage/TrendingFoods";

// Title
export const metadata = {
  title: "Homepage | FoodZone",
};

export default function Home() {
  return (
    <div >
      <Banner></Banner>
      <States></States>
      <TrendingFoods from="Homepage"></TrendingFoods>
      <FoodMarquee></FoodMarquee>
      <Reviews></Reviews>
    </div>
  );
}
