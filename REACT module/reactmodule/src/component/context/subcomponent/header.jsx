import { ThemeContext } from "../themeContext";
import { useContext } from "react";
const Header = ()=> {
    const context = useContext(ThemeContext);
    const handleClick = ()=> {
        if(context.theme === "light") {
            context.updateTheme("dark")
        } else {
            context.updateTheme("light")
        }
    }
    return (
        <nav>
            <button onClick={handleClick}>Toggle Theme</button>
        </nav>
    )
}
export default Header;