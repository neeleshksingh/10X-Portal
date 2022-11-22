const Counter = () =>{
    let count = 0
    const handleIncrement = () =>{

    }
    const handleDecrement = () =>{

    }
    return (
        <div>
            <button onClick={handleIncrement}>+</button>
                <div>{count}</div>
            <button onClick={handleDecrement}>-</button>
        </div>
    )
}
export default Counter