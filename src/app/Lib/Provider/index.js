import CartItemProvider from "@/app/Context/CartContext";
import SearchingItemProvider from "@/app/Context/SearchingFoodContext";

const Provider = ({children}) => {
    return (
        <div>
            <CartItemProvider>
                <SearchingItemProvider>
                    {children}
                </SearchingItemProvider>
            </CartItemProvider>
        </div>
    );
};

export default Provider;