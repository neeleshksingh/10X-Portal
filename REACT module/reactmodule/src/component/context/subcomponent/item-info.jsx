import { useContext } from "react"
import { ThemeContext } from "../themeContext"
const ItemInfo = () =>{
    const consumerTheme = useContext(ThemeContext)
    return(
        <div>Iteminfo Works!</div>
    )
}
export default ItemInfo