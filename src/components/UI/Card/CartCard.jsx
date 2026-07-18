import Image from "next/image";

const CartCard = ({ listedItem }) => {
  const {
    id,
    image_link,
    dish_name,
    price,
  } = listedItem;

  return (
    <div
      key={id}
      className="flex items-center justify-between p-4 bg-white rounded-xl shadow-md border border-gray-200 transition"
    >
      {/* Left */}
      <div className="flex items-center gap-4">
        <div className="relative h-20 w-20 overflow-hidden rounded-xl bg-gray-100">
          <Image
            src={image_link}
            alt={dish_name}
            fill
            className="object-cover"
          />
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800">
            {dish_name}
          </h3>

          <p className="mt-1 text-violet-600 font-bold">
            ৳ {price}
          </p>
        </div>
      </div>

      {/* Right */}
      <button className="px-4 py-2 rounded-lg border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition">
        Remove
      </button>
    </div>
  );
};

export default CartCard;