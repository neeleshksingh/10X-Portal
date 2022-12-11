import React, { useState } from 'react'
import '../styles/App.css';
const App = () => {
  const arr = ["Marco", "Polo"]
  const [heading, setHeading] = useState(arr[0])
  const [toogle, setToogle] = useState(arr[1])
  const textChange =()=>{
    const temp = arr[0]
    arr[0] = arr [1]
    arr[1] = temp
    setHeading(arr[0])
    setToogle(arr[1])
  }
  return (
    <div id="main">
      <h1 id='marco-polo'>{heading}</h1>
      <button id='marco-polo-toggler' onClick={()=>{textChange()}}>{toogle}</button>
    </div>
  )
}
export default App;
