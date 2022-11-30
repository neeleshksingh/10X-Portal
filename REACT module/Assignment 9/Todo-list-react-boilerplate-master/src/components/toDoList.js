import { useState } from "react"
import React from "react"
import './todo.css'

const ToDoList = ()=>{
const [inp,setInp]=useState('')
const [arr,setArr]=useState([])
const handleData = ()=>{
    console.log(inp,arr)
    if(inp!='')
    {
     setArr([...arr,inp])
     setInp('')
    }
}
const deleteData= (deletevalue) =>{
    console.log(deletevalue)
    let x=arr.filter((data)=> data!= deletevalue)
    setArr(x)
}
    return(
        <section className="container">
        <h1 className="heading">Website Todo</h1>
        <div className="box">
        <input id="task" placeholder="Enter items here" className='inp' onChange={(e)=>{setInp(e.target.value)}} value={inp}/>
        
        <ul className="list">
            {arr.map((data,index)=>{return( 
                <div className="li-cont">
                 <li>{data}</li> 
                 <button className='del' onClick={()=>{deleteData(data)}}>Delete</button>
                 </div>
            )})}
        </ul>
        <button id="btn" className='btn' onClick={handleData}>Add New Task</button>
        </div>
    </section>)
}
export default ToDoList