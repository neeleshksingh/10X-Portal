const Form = () =>{
    return(
        <div>
            <h1>Registration form</h1>
            <form action="">
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username"/>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email"/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default Form