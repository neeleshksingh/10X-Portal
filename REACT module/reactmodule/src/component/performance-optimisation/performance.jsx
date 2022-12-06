import { useCallback } from "react"
import { useState } from "react"
import PerformanceChild from "./performance-child"

const Performance = () =>{
    const [list, setList] = useState([])
    const [listItem, setListItem] = useState('')
    const [heading, setHeading] = useState("I am old Heading")
    const handleHeading = useCallback(()=>{
        return heading
    }, [heading])
    return(
        <>
            <input onChange={(e)=>{setListItem(e.target.value)}} value={listItem} type="text" />
            <button onClick={()=>{setList([...list, listItem]); setListItem("")}}>Add to list</button>
            <button onClick={()=>{setHeading("I am updated Heading")}}>Update Heading</button>
            {list.map((value, key)=>{
                return(
                    <div key={key}>{value}</div>
                )
            })}
            <PerformanceChild heading = {handleHeading}/>
        </>
    )
}
export default Performance