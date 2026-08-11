import TrendingFoods from "@/components/Homepage/TrendingFoods";
import { GetFoods } from "../Lib/GetFoods/GetFoods";

// Title
export const metadata = {
  title: "Menu | FoodZone",
};

const MenuPage = async ({from}) => {
    const FoodsData = await GetFoods();
    return (
        <div>
            <TrendingFoods from="Menu" FoodsData={FoodsData}></TrendingFoods>
        </div>
    );
};
export default MenuPage;