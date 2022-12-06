import { useMemo } from "react"
import { useEffect, useState } from "react"


const MemoValue = () =>{
    let num = 0
    const expensive = (num) =>{
        console.log("Calculating..........")
        for(let i=0;i<1000000000;i++){
            num = num +1
        }
        console.log("Calculated!")
        return num
    }
    const [count, setCount] = useState(0)
    const [test, setTest] = useState(false)
    useMemo(()=>{expensive(count)}, [count])
    return(
        <>
            <button onClick={()=>{setCount(count+1)}}>+</button>
            <button onClick={()=>{setTest(!test)}}>Re Render</button>
            <div>{count}</div>
        </>
    )
}
export default MemoValue