import { useState } from "react"

const Form = () =>{
    const [form, setForm] = useState({username: "", email: "", password: ""})
    const handleSubmit = () =>{
        console.log(form)
        debugger
    }
    return(
        <div>
            <h1>Registration form</h1>
            <form>
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" onChange={(e) =>{setForm({...form,username: e.target.value})}}/>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" onChange={(e) =>{setForm({...form,email: e.target.value})}}/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" onChange={(e) =>{setForm({...form,password: e.target.value})}}/>
                </div>
                <button type="submit" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}
export default Form