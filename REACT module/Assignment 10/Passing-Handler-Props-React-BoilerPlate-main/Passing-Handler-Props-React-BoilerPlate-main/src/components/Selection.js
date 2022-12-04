
import React, { useState } from "react"
import '../styles/Child.css';


const Selection=(props)=>{
    const {earlier,data,applyColor} = props
    const [color,changeColor]= useState(earlier.background)
    const handle=()=>{
        
        changeColor(earlier.background)
    }
    return(<div className="fix-box" onClick={handle} style={{background:color}}>
     <h2  className="subheading">Selection</h2>
    </div>
    )
}
export default Selection