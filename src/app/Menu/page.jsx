import TrendingFoods from "@/components/Homepage/TrendingFoods";
import { GetFoods } from "../Lib/GetFoods/GetFoods";
import SearchFunction from "@/components/FilterFunctionality/SearchFunction";
import FilterFunction from "@/components/FilterFunctionality/FilterFunction";

// Title
export const metadata = {
    title: "Menu | FoodZone",
};

const MenuPage = async ({ from, searchParams }) => {
    const sp = await searchParams;
    const FoodsData = await GetFoods({category:sp.category, search: sp.search});
    return (
        <div>
            <div className="max-w-4xl mx-auto grid grid-cols-3 gap-4 my-10">
                <SearchFunction></SearchFunction>
                <FilterFunction></FilterFunction>
            </div>
            <TrendingFoods from="Menu" FoodsData={FoodsData}></TrendingFoods>
        </div>
    );
};
export default MenuPage;