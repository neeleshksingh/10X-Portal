import { ThemeContext } from "./themeContext"

const ThemeProvider = (props) =>{
    return(
        <ThemeContext.Provider value={{theme: "light"}}>
            {props.children}
        </ThemeContext.Provider>
    )
}
export default ThemeProvider