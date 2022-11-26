import { useState } from "react"

const Practice = () =>{
    const [item, setItem] = useState("")
    const [userList, setUserList] = useState([])
    const [age, setAge] = useState(0)
    const handleItemAdd = () => {
        if(age > 18){
            setUserList([...userList,{name: item, age: age}])
        }
        setItem("")
        setAge(0)
    }
    return(
        <div>
            <div>You are minor</div>
            <input onChange={(event)=>{setItem(event.target.value)}} value={item}/>
            <input type="number" onChange={(event)=>{setAge(parseInt(event.target.value))}} value={age}/>
            <button onClick={handleItemAdd}>Add Item</button>
            <ul>
                {userList.map((user, index) =>{
                    return(
                        <div key={index}>
                        <li>{user.name}</li>
                        <li>{user.age}</li>
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}
export default Practice