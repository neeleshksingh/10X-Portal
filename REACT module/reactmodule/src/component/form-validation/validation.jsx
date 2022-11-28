const Validation = () =>{
    return(
        <div>
            <form action="">
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" />
                </div>
                <div>
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input type="password" name="confirm-password" id="confirm-password" />
                </div>
            </form>
            <button type="submit">Submit</button>
        </div>
    )
}
export default Validation