import { ThemeContext } from "./themeContext"

const ThemeProvider = (props) =>{
    return(
        <ThemeContext.Provider>
            {props.children}
        </ThemeContext.Provider>
    )
}
export default ThemeProvider