import { ThemeContext } from "../themeContext";
import { useContext } from "react";

const ItemInfo = ()=> {
    const consumerTheme = useContext(ThemeContext);
    return (

        <div className={consumerTheme.theme}>ItemInfo Works !</div>
        
     
    )
}
export default ItemInfo;