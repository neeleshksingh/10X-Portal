import React from "react"

import { Link } from "react-router-dom"
const Navigation=()=>{
    return (
        <>
            <nav>
                <ul>
                 <Link to='/'> <li>Home</li></Link>
                 <Link to='About'> <li>About</li></Link>
                </ul>
            </nav>
        </>
    )
}
export default Navigation