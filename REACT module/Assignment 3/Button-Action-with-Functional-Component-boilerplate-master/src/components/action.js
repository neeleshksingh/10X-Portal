import React from "react";
import {useState} from "react"
const Action = (props) =>{
    const [info, setinfo] = useState('')
    const renderbut = () =>{
        setinfo(props.info)
    }
    return (
        <div>
            <p id="para">{info}</p>
            <button id="click" onClick={renderbut}>Click Me</button>
        </div>
    )
}
export default Action