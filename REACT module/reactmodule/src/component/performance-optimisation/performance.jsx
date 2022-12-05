import { useState } from "react"
import PerformanceChild from "./performance-child"

const Performance = () =>{
    const [list, setList] = useState([])
    const [listItem, setListItem] = useState('')
    return(
        <>
            <input onChange={(e)=>{setListItem(e.target.value)}} value={listItem} type="text" />
            <button onClick={()=>{setList([...list, listItem]); setListItem("")}}>Add to list</button>
            {list.map((value, key)=>{
                return(
                    <div key={key}>{value}</div>
                )
            })}
            <PerformanceChild heading = "Data from Parent"/>
        </>
    )
}
export default Performance