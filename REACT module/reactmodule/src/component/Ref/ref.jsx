import { useRef } from "react"
const Ref = () => {
    const actualReferrence = useRef(null)
    const handleChangeText = () =>{
        actualReferrence.current.innerText = 'Neelesh'
    }
    return(
        <>
            <div>I am virtual Div</div>
            <div ref={actualReferrence}>I am actual Div</div>
            <button onClick={handleChangeText}>Change Text</button>
        </>
    )
}
export default Ref