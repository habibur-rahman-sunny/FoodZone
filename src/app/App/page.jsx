import TrendingApps from "@/components/Homepage/TrendingApp";

const AppsPage = async ({from}) => {
    return (
        <div>
            <TrendingApps from="App"></TrendingApps>
        </div>
    );
};
export default AppsPage;