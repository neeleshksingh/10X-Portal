import { useContext } from "react";
import { ThemeContext } from "../themeContext";
const Sidebar = ()=> {
    const context = useContext(ThemeContext)
    return (
        <div style={{color: `${context.theme === "light" ? "blue" : "red"}`}}>Sidebar Works !</div>
    )
}
export default Sidebar;