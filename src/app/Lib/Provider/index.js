import CartItemProvider from "@/app/Context/CartContext";

const Provider = ({children}) => {
    return (
        <div>
            <CartItemProvider>
                {children}
            </CartItemProvider>
        </div>
    );
};

export default Provider;