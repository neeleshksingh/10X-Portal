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
                <button onClick={()=> {this.setState({...this.state, count: this.state.count + 1})}}>Increment</button>
                <button onClick={()=> {this.setState({...this.state, count: this.state.count - 1})}}>Decrement</button>
                <div>{this.state.count}</div>        
            </>
        )
    }
}
export default CounterClass