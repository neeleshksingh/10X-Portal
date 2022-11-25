import { useState } from "react"
import Operation from "./operation/operation"

const Calculator = () =>{
    const [calculated, setCalculated] = useState(0)
    const [input1, setInput1] = useState("")
    const [input2, setInput2] = useState("")
    return(
        <div>
            <input type="number" onChange={(event) => {setInput1(event.target.value)}}/>
            <input type="number" onChange={(event) => {setInput2(event.target.value)}}/>
            <div>{calculated}</div>
            <Operation value1={input1} value2={input2} updateCalculated={setCalculated}/>
        </div>
    )
}
export default Calculator