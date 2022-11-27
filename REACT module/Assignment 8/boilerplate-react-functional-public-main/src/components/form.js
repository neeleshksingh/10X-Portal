import React from "react";
import './form.css'
const Form = () =>{
    return(
        <div className="container">
            <h1>Signup Form</h1>
            <form>
                <div className="form1">
                <label for="name">Name</label>
                <input type="text" name="name" data-testid ='name' id="name" required pattern="[a-zA-Z0-9\s]+" /> <br/>
                <label for="email">Email Address</label>
                <input type="email" name="email" data-testid="email" id="email" required/><br/>
                <label for="gender">Gender</label>
                <select data-testid ="gender" required>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select><br/>
                <label for="phoneNumber">Phone Number</label>
                <input type="number" name="phoneNumber" data-testid='phoneNumber' id="phoneNumber" required/><br/>
                <label for="password">Password</label>
                <input type="password" name="password" data-testid="password" minLength={6} id="password" required/> <br/>
                <button type="submit" data-testid= 'submit' id="submit">Submit</button>
                </div>
                
            </form>
        </div>
    )
}
export default Form