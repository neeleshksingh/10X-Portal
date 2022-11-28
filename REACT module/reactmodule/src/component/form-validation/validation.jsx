import { useState } from "react"

const Validation = () =>{
    const [form, setForm] = useState({username:"", email:"", password:"", confirmPassword: ""})
    const handleSubmit = (event) =>{
        event.preventDefault()
    }
    return(
        <div>
            <form action="">
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" onChange={(event)=>{setForm({...form, username: event.target.value})}} onBlur={(event)=>{}} value={form.username}/>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" onChange={(event)=>{setForm({...form, email: event.target.value})}} onBlur={(event)=>{}} value={form.email} />
                </div>
                <div>
                    <label htmlFor="password">Password <span style={{color:"red"}}>*</span> </label>
                    <input type="password" id="password" onChange={(event)=>{setForm({...form, password: event.target.value})}} onBlur={(event)=>{}} value={form.password}/>
                </div>
                <div>
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input type="password" name="confirm-password" id="confirm-password" onChange={(event)=>{setForm({...form, confirmPassword: event.target.value})}} onBlur={(event)=>{}} value={form.confirmPassword}/>
                </div>
                <button type="submit" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}
export default Validation