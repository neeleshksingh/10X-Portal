import axios from "axios"
import { useState, useEffect } from "react"
const SideEffectPractise = () =>{
    const [bitcoinQuantity, setBitcoinQuantity] = useState(0)
    const [cryptoData,setCryptoData] = useState([])
    useEffect(()=>{
        getPriceData()
    }, [])
    const getPriceData = () =>{
        axios.get("https://api.coindesk.com/v1/bpi/currentprice.json").then((bitcoinData)=>{
        setCryptoData(Object.values(bitcoinData.data.bpi))    
        console.log(cryptoData, "crypto")
        }).catch(()=>{

        }).finally(()=>{

        })
    }
    //getPriceData()
    return(
        <div>
            <h2>Application for Side Effect</h2>
            <button onClick={() =>{setBitcoinQuantity(bitcoinQuantity + 1)}}>+</button>
            <button onClick={() =>{setBitcoinQuantity(bitcoinQuantity - 1)}}>-</button>
            <div>Quantity: {bitcoinQuantity}</div>
            <table>
                <thead>
                    <tr>
                        <th>Code</th>
                        <th>Price</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {!cryptoData.length && <img src="{loader}" alt="loading"/>}
                    {cryptoData.map((value, index) =>{
                        return(
                            <tr key="index">
                                <td>{value.code}</td>
                                <td>{value.rate}</td>
                                <td>{value.description}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
export default SideEffectPractise