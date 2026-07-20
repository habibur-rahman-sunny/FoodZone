import { CartItemsContext } from "@/app/Context/CartContext";
import { useContext } from "react";

const RemoveToggleBtn = ({listedItem}) => {
    const {cartItem, setCartItem} = useContext(CartItemsContext)
    console.log(cartItem);

    const handleRemoveBtn = ()=> {
        const filteredItem = cartItem.filter((specificItem) => listedItem.id !== specificItem.id);
        setCartItem(filteredItem);
    }
    return (
        <div>
            <button onClick={handleRemoveBtn} className="px-4 py-2 rounded-lg border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition">
                Remove
            </button>
        </div>
    );
};

export default RemoveToggleBtn;