import {useState} from "react"
const Counter = () =>{
    const [count, updateCount] = useState(0)
    const handleIncrement = () =>{
        //update the count value
        updateCount(count + 1)
        //updateCount(count * 2)
        console.log(count)
    }
    const handleDecrement = () =>{
        //update the count value
        updateCount(count-1)
        console.log(count)
    }
    return (
        <div>
            <button onClick={handleIncrement}>+</button>
                <div>{count}</div>
            <button onClick={handleDecrement}>-</button>
            <button onClick={() => {updateCount(count*2)}}>Multiply by 2</button>
        </div>
    )
}
export default Counter