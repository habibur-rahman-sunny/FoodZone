import Image from "next/image";
import RemoveToggleBtn from "./RemoveToggleBtn";

const CartCard = ({ listedItem, from }) => {
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
            width={120}
            height={120}
            className="w-28 h-28 object-cover rounded-xl"
          />
        </div>

        <div>
          <h3 className={`${from === "Checkout"? "line-clamp-1":""} text-lg font-semibold text-gray-800`}>
            {dish_name}
          </h3>

          <p className="mt-1 text-violet-600 font-bold">
            ৳ {price}
          </p>
        </div>
      </div>

      {/* Right */}
      <RemoveToggleBtn listedItem={listedItem}></RemoveToggleBtn>
    </div>
  );
};

export default CartCard;