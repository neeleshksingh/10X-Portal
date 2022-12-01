import { ThemeContext } from "./themeContext";
import './subcomponent/style-context.css'
import { useState } from "react";
import Header from "./subcomponent/header";
import Sidebar from "./subcomponent/sidebar";
import Footer from "./subcomponent/footer";
import Item from "./subcomponent/items";
const ThemeProvider = (props)=> {
    const [theme,setTheme] = useState('light')
    return (
        <ThemeContext.Provider value={{theme: theme, updateTheme: setTheme}}>
            <Header/>
            <Sidebar/>
            <Footer/>
            <Item/>
        </ThemeContext.Provider>
    )
}
export default ThemeProvider;