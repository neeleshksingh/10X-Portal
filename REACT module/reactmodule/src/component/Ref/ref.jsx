import { useRef } from "react"
const Ref = () =>{
    const actualReferrence = useRef(null)
    return(
        <>
            <div>
                I am virtual Div
            </div>
            <div>
                I am actual Div
            </div>
        </>
    )
}
export default Ref