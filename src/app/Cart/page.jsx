import CartPageClient from "./CartPageClient";
import TrendingFoods from "@/components/Homepage/TrendingFoods";

export default function Page() {
  return (
    <div className="grid lg:grid-cols-2 gap-8 items-stretch my-12">

      {/* Left: Cart Section (১ ভাগ জায়গা নিবে) */}
      <div className="lg:col-span-1">
        <CartPageClient />
      </div>

      {/* Right: Trending/Cart Foods (২ ভাগ জায়গা নিবে এবং উচ্চতা সমান থাকবে) */}
      <div className="lg:col-span-1">
        <TrendingFoods></TrendingFoods>
      </div>

    </div>
  );
}