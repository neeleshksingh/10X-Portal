import React, {Component, useState} from "react";
import "./../styles/App.css";
import Action from "./action";
function App() {
  let data = `Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy`
  return (
    <div id="root">
       <Action info={data}/>
    </div>
   
  );
}
export default App;
