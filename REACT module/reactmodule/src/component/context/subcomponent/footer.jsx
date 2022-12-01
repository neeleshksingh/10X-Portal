import { useContext } from "react";
import { ThemeContext } from "../themeContext";
const Footer = ()=> {
    const context = useContext(ThemeContext)
    return (
        <div className={context.theme}>Footer Works !</div>
    )
}
export default Footer;