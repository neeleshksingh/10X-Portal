import { useState } from "react"
import './validation.css'
const Validation = () =>{
    const [form, setForm] = useState({username:"", email:"", password:"", confirmPassword: ""})
    const [error, setError] = useState({username:{isValid : true, message:""}, email:{isValid : true, message:""}, password:{isValid : true, message:""}, confirmPassword:{isValid : true, message:""}})
    const handleSubmit = (event) =>{
        event.preventDefault()
        alert("Form Submitted Successfully")
        setForm({username:"", email:"", password:"", confirmPassword: ""})
    }
    const checkErrors = (type) =>{
        switch(type) {
            case "username":
                if(form.username.length > 8 || form.username.length < 6){
                    setError({...error, username:{isValid: false, message: "username should have min length of 6 and max length of 8"}})
                }
                else{
                    setError({...error, username:{isValid: false, message: ""}})
                }
                break
            case "email":
                break
            case "password":
                break
            case "confirmPassword":
                break
        }
    }
    const isSubmitValid = form.username.length && form.email.length && form.password.length && form.confirmPassword.length
    return(
        <div id="container">
            <div>
                <h1 id="heading">Registration Form</h1>
            </div>
            <form action="" id="form">
                <div>
                    <label htmlFor="username">Username<span style={{color:"red"}}>*</span></label><br />
                    <input type="text" id="username" onChange={(event)=>{setForm({...form, username: event.target.value})}} onBlur={(event)=>{checkErrors("username")}} value={form.username}/>
                    {!error.username.isValid? <div style={{color: "red"}}>{error.message}</div> : null}
                </div>
                <div>
                    <label htmlFor="email">Email<span style={{color:"red"}}>*</span></label><br />
                    <input type="email" name="email" id="email" onChange={(event)=>{setForm({...form, email: event.target.value})}} onBlur={(event)=>{checkErrors("email")}} value={form.email} />
                </div>
                <div>
                    <label htmlFor="password">Password <span style={{color:"red"}}>*</span> </label><br />
                    <input type="password" id="password" onChange={(event)=>{setForm({...form, password: event.target.value})}} onBlur={(event)=>{checkErrors("password")}} value={form.password}/>
                </div>
                <div>
                    <label htmlFor="confirm-password">Confirm Password<span style={{color:"red"}}>*</span></label><br />
                    <input type="password" name="confirm-password" id="confirm-password" onChange={(event)=>{setForm({...form, confirmPassword: event.target.value})}} onBlur={(event)=>{checkErrors("confirPassword")}} value={form.confirmPassword}/>
                </div>
                <button type="submit" disabled={isSubmitValid === 0 ? true : false} onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}
export default Validation