// by using function
// const Counter = () =>{
//     return(
//         <>
        
//         </>
//     )
// }

//by using class
import React from "react";
class CounterClass extends React.Component {
    constructor() {
        super()
        this.state = {
            count : 0
        }
    }
    render(){
        return(
            <>
                Counter Class    <br />
                <button onClick={()=> {}}>+</button>
                <button onClick={()=> {}}>-</button>
                <div>{}</div>        
            </>
        )
    }
}
export default CounterClass