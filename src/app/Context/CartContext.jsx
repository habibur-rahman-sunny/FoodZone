'use client'
import { createContext, useState } from "react";
export const CartItemsContext = createContext()

const CartItemProvider = ({children}) => {
const [cartItem, setCartItem] = useState([]);
console.log(cartItem);
const value = {
    cartItem,
    setCartItem,
}

    return (
        <CartItemsContext.Provider value ={value}>
            {children}
        </CartItemsContext.Provider>
    );
};

export default CartItemProvider;