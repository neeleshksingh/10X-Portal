import { cartContext } from "./cart-context";
import { useContext } from "react";
const Item = ()=> {
    const items = [{name: "item1"},{name: "item2"},{name: "item3"},{name: "item4"}
,{name: "item5"}];
const context = useContext(cartContext)
const handleClick = (value)=> {
    context.updateCart([...context.cart, value ])
}
    return (
        <div>
            {
                items.map((value)=> {
                    return (
                        <div>
                            {value.name}
                            <button onClick={(()=> {handleClick(value)})}>Add to Cart</button>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Item;