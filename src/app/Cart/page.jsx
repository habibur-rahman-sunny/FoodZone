import { GetFoods } from "../Lib/GetFoods/GetFoods";
import CartPageClient from "./CartPageClient";
import TrendingFoods from "@/components/Homepage/TrendingFoods";

const CartPage = async ()=> {

  const FoodsData = await GetFoods();
  return (
    <div className="grid lg:grid-cols-2 gap-8 items-stretch my-12">

      <div className="lg:col-span-1">
        <CartPageClient />
      </div>

      <div className="lg:col-span-1 h-[80vh] overflow-y-auto pr-2">
        <TrendingFoods from="Cart" FoodsData={FoodsData}></TrendingFoods>
      </div>

    </div>
  );
}

export default  CartPage;