import { Link, Outlet } from "react-router-dom";

const IndexComponent = () =>{
    return(
        <ul>
            <li>
                <Link to="/home">Home</Link>
            </li>
            <li>
                <Link to="/calculator">Calculator</Link>
            </li>
            <li>
                <Link to="/form">Form</Link>
            </li>
            <li>
                <Link to="/age">Age</Link>
            </li>
            <li>
                <Link to="/login">Login</Link>
            </li>
        </ul>
    )
}
export default IndexComponent