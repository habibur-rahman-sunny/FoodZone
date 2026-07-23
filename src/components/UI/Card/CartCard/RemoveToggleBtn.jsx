import { CartItemsContext } from "@/app/Context/CartContext";
import { Trash2 } from "lucide-react";
import { useContext } from "react";

const RemoveToggleBtn = ({listedItem}) => {
    const {cartItem, setCartItem} = useContext(CartItemsContext)

    const handleRemoveBtn = ()=> {
        const filteredItem = cartItem.filter((specificItem) => listedItem.id !== specificItem.id);
        setCartItem(filteredItem);
    }
    return (
        <div>
            <button onClick={handleRemoveBtn} className="px-2 py-2 rounded-lg border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition">
                <Trash2 size={18} />
            </button>
        </div>
    );
};

export default RemoveToggleBtn;