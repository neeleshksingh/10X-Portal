import { useState } from "react"

const Practice = () =>{
    const [item, setItem] = useState("")
    const [userList, setUserList] = useState([])
    const [age, setAge] = useState(0)
    const [category, setCategory] = useState("")
    const handleItemAdd = () => {
        if(age > 18){
            setUserList([...userList,{name: item, age: age, category: category}])
        }
        setItem("")
        setAge(0)
        setCategory("")
    }
    return(
        <div>
            <div>You are minor</div>
            <input onChange={(event)=>{setItem(event.target.value)}} value={item}/>
            <input type="number" onChange={(event)=>{setAge(parseInt(event.target.value))}} value={age}/>
            <select onChange={(event)=>{setCategory(event.target.value)}} value={category}>
                <option>Choose your category</option>
                <option value="veg">Veg</option>
                <option value="non-veg">Non-Veg</option>
            </select>
            <button onClick={handleItemAdd}>Add Item</button>
            <ul>
                {userList.map((user, index) =>{
                    return(
                        <div key={index}>
                        <li>{user.name}</li>
                        <li>{user.age}</li>
                        <li>{user.category}</li>
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}
export default Practice