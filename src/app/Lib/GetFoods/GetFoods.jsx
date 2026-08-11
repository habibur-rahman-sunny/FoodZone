export const GetFoods = async () => {
  const res = await fetch(
    "https://phi-lab-server.vercel.app/api/v1/lab/foods"
  );

  const data = await res.json();

  return data.data;
};