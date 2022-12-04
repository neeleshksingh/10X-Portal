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
    }
    render(){
        return(
            <>
                Counter Class    
                <button onClick={()=> {}}>+</button>
                <button onClick={()=> {}}>-</button>
                <div>{}</div>        
            </>
        )
    }
}
export default CounterClass