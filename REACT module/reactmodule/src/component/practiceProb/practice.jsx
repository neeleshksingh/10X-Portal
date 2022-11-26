import { useState } from "react"

const Practice = () =>{
    const [item, setItem] = useState("")
    const [userList, setUserList] = useState([])
    const handleItemAdd = () => {
        setUserList([...userList,{name: item}])
        setItem("")
    }
    return(
        <div>
            <input onChange={(event)=>{setItem(event.target.value)}} value={item}/>
            <button onClick={handleItemAdd}>Add Item</button>
            <ul>
                {userList.map((user, index) =>{
                    return(
                        <li key={index}>{user.name}</li>
                    )
                })}
            </ul>
        </div>
    )
}
export default Practice