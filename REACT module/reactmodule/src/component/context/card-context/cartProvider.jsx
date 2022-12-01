import { useState } from "react";
import Cart from "./cart";
import { cartContext } from "./cart-context";
import Item from "./items";
const CartProvider = ()=> {
    const [cart, setCart] = useState([]);
    return (
        <cartContext.Provider value={{cart : cart, updateCart:setCart}}>
             <Cart/>
            <Item/>
           
        </cartContext.Provider>
    )
}
export default CartProvider;