import Banner from "@/components/Homepage/Banner";
import FoodMarquee from "@/components/Homepage/FoodMarque";
import Reviews from "@/components/Homepage/Reviews";
import States from "@/components/Homepage/States";
import TrendingApps from "@/components/Homepage/TrendingFoods";


export default function Home() {
  return (
    <div >
      <Banner></Banner>
      <States></States>
      <TrendingApps from="Homepage"></TrendingApps>
      <FoodMarquee></FoodMarquee>
      <Reviews></Reviews>
    </div>
  );
}
