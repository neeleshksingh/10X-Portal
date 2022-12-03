import { useRef } from "react"

const RefComplex = () => {
    const form = useRef({username : '', password: ''})
    return(
        <>
            <input type="text" onChange={(e)=>form.current.username = e.target.value}/>
            <input type="password" onChange={(e)=>form.current.password = e.target.value}/>
            <button onClick={()=>{}}>Login</button>
        </>
    )
}
export default RefComplex