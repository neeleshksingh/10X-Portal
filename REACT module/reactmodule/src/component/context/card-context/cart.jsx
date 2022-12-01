import { cartContext } from "./cart-context";
import { useContext } from "react";
const Cart = ()=> {
    const context = useContext(cartContext);
    
    const getCartList = ()=> {
        const cartList = [];
        const newList = {}
        context.cart.map((value)=> {
            //item1 item2
            if(newList[value.name]) {
                newList[value.name]++
            } else {
                newList[value.name] = 1
            }
        })
        for(let key in newList) {
            cartList.push(
                <div>
                    {key}: {newList[key]}

                </div>
            )
        }
        return cartList
    }
    getCartList()

    return (
        <div>
            cart {context.cart.length}
            {getCartList()}
        </div>
    )
}
export default Cart;