import TrendingFoods from "@/components/Homepage/TrendingFoods";

// Title
export const metadata = {
  title: "Menu | FoodZone",
};

const AppsPage = async ({from}) => {
    return (
        <div>
            <TrendingFoods from="Menu"></TrendingFoods>
        </div>
    );
};
export default AppsPage;