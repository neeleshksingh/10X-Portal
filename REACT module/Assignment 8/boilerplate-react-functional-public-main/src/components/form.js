import React from "react";
import './form.css'
import { useState } from "react";
const Form = () =>{
    const [data, updatedata] = useState({
        user: "",
        email: "",
        gender: "",
        phone: "",
        pass: "",
      });
      const [massage, updatedmassage] = useState({
        nothing: "",
        user: "",
        email: "",
        phone: "",
        pass: "",
        display: "",
      });
      const submit = () => {
        if (
          data.user == "" ||
          data.email == "" ||
          data.phone == "" ||
          data.pass == ""
        ) {
          updatedmassage({ nothing: "All fields are mandatory" });
        } else if (!data.user.match(/^[0-9a-z ]+$/i)) {
          updatedmassage({ user: "Name is not alphanumeric" });
        } else if (!data.email.includes("@")) {
          updatedmassage({ email: "Email must contain @" });
        } else if (!data.phone.match(/^[0-9]+$/i)) {
          updatedmassage({ phone: "Phone Number must contain only numbers" });
        } else if (data.pass.length < 6) {
          updatedmassage({ pass: "Password must contain atleast 6 letters" });
        } else {
          for (let i = 0; i < data.email.length; i++) {
            if (data.email[i] == "@")
              updatedmassage({ display: `Hello ${data.email.slice(0, i)}` });
          }
        }
      };
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
                <select data-testid ="gender" id="gender" required>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
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