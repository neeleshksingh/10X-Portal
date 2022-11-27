import axios from "axios"
import { useState, useEffect } from "react"
const SideEffectPractise = () =>{
    const [bitcoinQuantity, setBitcoinQuantity] = useState(0)
    useEffect(()=>{}, [])
    const getPriceData = () =>{
        axios.get("https://api.coindesk.com/v1/bpi/currentprice.json").then((bitcoinData)=>{
            console.log(bitcoinData)
        }).catch(()=>{

        }).finally(()=>{

        })
    }
    getPriceData()
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