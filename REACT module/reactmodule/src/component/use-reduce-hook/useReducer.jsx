import { useReducer, useState } from "react"

const UseReducer = () =>{
    const reducer = (currentValue, action) =>{
        switch(action.type){
            case "IncrementByValue" :
                return currentValue + action.value
            case "Decrement" :
                return currentValue - 1
            case "Increment" :
                return currentValue + 1
            default:
                return currentValue
        }
    }
    const initialState = 0
    //const [counter, setCounter] = useState(0)
    const [counter, dispatch] = useReducer(reducer, initialState)
    const [inputValue, setInputValue] = useState("")
    return(
        <div>
            <button onClick={()=>{dispatch({type: "Increment"})}}>+</button>
            <div>{counter}</div>
            <button onClick={()=>{dispatch({type: "Decrement"})}}>-</button>
            <input type="text" onChange={(e) => {}} />
            <button>Increment By</button>
        </div>
    )
}
export default UseReducer