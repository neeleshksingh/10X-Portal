import { useState } from "react"
import "./practise2.css"
const Practise2 = () =>{
    const [name, setName] = useState("")
    const [marks, setMarks] = useState(0)
    const [tableData, setTableData] = useState([])
    const handleAdd = () =>{
        setTableData([...tableData,{name:name, marks:marks}])
    }
    const handleDelete = (deleteValue) =>{
        const newTableData = tableData.filter((data)=>{
            return data.name !== deleteValue.name
        })
        setTableData(newTableData)
    }
    return (
        <div>
            <input type="text" value={name} onChange={(e) =>{setName(e.target.value)}}/>
            <input type="number" value={marks} onChange={(e) =>{setMarks(e.target.value)}}/>
            <button onClick={handleAdd}>Add Row</button>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Marks</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((tableVal, index)=>{
                        return(
                            <tr key={index}>
                                <td>{name}</td>
                                <td>{marks}</td>
                                <button onClick={()=>{handleDelete(tableVal)}}>delete</button>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
export default Practise2