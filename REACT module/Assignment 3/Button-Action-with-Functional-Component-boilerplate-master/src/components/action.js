import React from "react";
import Para from "./para";
import {useState} from "react"
const Action = () =>{
    const [count, updateCount] = useState(0)
    const renderbut = () =>{
        
    }
    return (
        <div>
            <button id="click" onClick={renderbut}></button>
        </div>
    )
}
export default Action