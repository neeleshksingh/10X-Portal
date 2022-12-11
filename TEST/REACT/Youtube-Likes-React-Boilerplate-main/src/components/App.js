import React, { useState } from 'react'
import '../styles/App.css';
import like from '../like.svg';
const App = () => {
//write your code here
const [color, setColor] = useState(0)
const [count, setCount] = useState(0)
const handleClick = () =>{
//write your code here
  setCount(count+1)
  setColor(color+0.1)
}
  return (
    <div id="main">
      <img id="like-btn-img" src={like} style={{fill:'white',width:'100px',backgroundColor: `rgba(255, 0, 0, ${color})`}} onClick={handleClick}/>
      <h3>Likes: <span id="like-counter">{count}</span></h3>
    </div>
  )
}


export default App;
