import { useReducer, useState } from "react"

const UseReducer = () =>{
    const reducer = (state, action) =>{

    }
    const initialState = 0
    //const [counter, setCounter] = useState(0)
    const [value, dispatch] = useReducer(reducer, initialState)
    return(
        <div>
            <button>+</button>
            <div>{counter}</div>
            <button>-</button>
            <input type="text" />
            <button>Increment By</button>
        </div>
    )
}
export default UseReducer