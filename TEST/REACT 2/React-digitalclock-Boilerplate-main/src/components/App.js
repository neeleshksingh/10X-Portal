import React from 'react'
import '../styles/App.css';
import { useState } from 'react';
const App = () => {

    const[date,setDate]= useState(new Date().toLocaleTimeString())
  setInterval(()=>{
    setDate(new Date().toLocaleTimeString())
  },1000)
  return (
    <div id="main">
      <div className="date-time">{date}</div>
    </div>
  )
}


export default App;
