const Iteration = () =>{
    const arr = [{firstName: "Neelesh", lastName:"Singh", age: 23 },{firstName: "Aman", lastName:"Kumar", age: 20},{firstName: "Roman", lastName:"God", age: 40}]
    return (
        <div>
            <ul>
                {arr.map((user, index)=>{
                    return(
                        <div key = {index}>
                            <li>{`${user.firstName} ${user.lastName}`}</li>
                            <li>{user.age}</li>
                        </div>
                    )
                })} 
            </ul>
        </div>
    )
}
export default Iteration