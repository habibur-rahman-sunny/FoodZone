import TrendingFoods from "@/components/Homepage/TrendingFoods";


const AppsPage = async ({from}) => {
    return (
        <div>
            <TrendingFoods from="App"></TrendingFoods>
        </div>
    );
};
export default AppsPage;