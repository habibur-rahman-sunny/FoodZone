import FoodDetails from "@/components/FoodDetails/FoodDetails";



// Next.js Page Component (যেখান থেকে API ডাটা ফেচ হচ্ছে)
const page = async ({ params }) => {
    const { FoodId } = await params;
    
    const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/foods/${FoodId}`);
    const data = await res.json();
    const specificFood = data.data;

    return (
        <div>
            <FoodDetails specificFood={specificFood}></FoodDetails>
        </div>
    );
};

export default page;