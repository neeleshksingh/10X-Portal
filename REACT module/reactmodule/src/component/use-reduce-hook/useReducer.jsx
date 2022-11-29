import { useReducer, useState } from "react"

const UseReducer = () =>{
    const reducer = (currentValue, action) =>{
        switch(action.type){
            case "IncrementByValue" :
                return {...currentValue, counter: currentValue.counter + action.value}
            case "Decrement" :
                return {...currentValue, counter: currentValue.counter - 1}
            case "Increment" :
                return {...currentValue, counter: currentValue.counter + 1}
            case "changeValue" :
                return {...currentValue, updateBy: action.value}
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
            <input type="text" onChange={(e) => {setInputValue(e.target.value)}} />
            <button onClick={() => {dispatch({type: "IncrementByValue", value: parseInt(counterApp.update)})}}>Increment By</button>
        </div>
    )
}
export default UseReducer