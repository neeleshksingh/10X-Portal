const Operation = (props) =>{
    const handleAdd = () =>{
        props.updateCalculated(parseInt(props.value1) + parseInt(props.value2))
    }
    const handleMultiply = () =>{
        props.updateCalculated(parseInt(props.value1) * parseInt(props.value2))
    }
    return (
        <div>
           <button onClick={handleAdd}>Add</button>
           <button onClick={handleMultiply}>Multiply</button>
        </div>
    )
}
export default Operation