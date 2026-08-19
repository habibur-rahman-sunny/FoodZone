export const GetFoods = async ({ category = "", search = "" } = {}) => {
  console.log(category);
  const res = await fetch(
    `https://phi-lab-server.vercel.app/api/v1/lab/foods?category=${category}&search=${search}`
  );

  const data = await res.json();
  return data.data;
};