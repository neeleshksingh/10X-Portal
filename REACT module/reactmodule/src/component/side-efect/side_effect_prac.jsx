import axios from "axios"
import { useState } from "react"
const SideEffectPractise = () =>{
    const [bitcoinQuantity, setBitcoinQuantity] = useState(0)
    const getPriceData = () =>{
        axios.get("").then((bitcoinData)=>{
            console.log(bitcoinData)
        }).catch(()=>{

        }).finally(()=>{

        })
    }
    return(
        <div>
            <h2>Application for Side Effect</h2>
            <button onClick={() =>{setBitcoinQuantity(bitcoinQuantity + 1)}}>+</button>
            <button onClick={() =>{setBitcoinQuantity(bitcoinQuantity - 1)}}>-</button>
            <div>Quantity: {bitcoinQuantity}</div>
        </div>
    )
}
export default SideEffectPractise