import { useSelector, useDispatch } from "react-redux"
import { increment, decrement, reset } from "../counter-reducer"
const CounterRedux = () =>{
    const counter = useSelector((state)=>{return state.counter})
    const dispatch = useDispatch()
    return(
        <>
            <button onClick={()=>{dispatch(increment())}}>+</button>
            <div>{counter.count}</div>
            <button onClick={()=>{dispatch(decrement())}}>-</button>
            <button onClick={()=>{dispatch(reset())}}>Reset</button>
        </>
    )
}
export default CounterRedux