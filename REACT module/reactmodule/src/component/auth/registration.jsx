import { useRef } from "react"

const Registration = () =>{
    const registrationRef = useRef({username:"", email:"", password:""})
    return(
        <>
            <div>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" onChange={(e)=>{registrationRef.current.username = e.target.value}}/>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" onChange={(e)=>{registrationRef.current.email = e.target.value}}/>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" onChange={(e)=>{registrationRef.current.password = e.target.value}}/>
            </div>
            <button onClick={()=>{console.log(registrationRef)}}>Submit</button>
        </>
    )
}
export default Registration