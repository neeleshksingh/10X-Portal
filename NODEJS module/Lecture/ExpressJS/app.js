/*
//for fun

var cowsay = require("cowsay");

console.log(cowsay.say({
    text: "I'm a moooodule",
    e: "oO",
    T: "U "
}));
*/

const express = require('express')
const app = express()

app.get("/", (req, res)=>{
    res.send("Kya baat hai !")
})

app.get("/user", (req, res)=>{
    console.log(req.query);
    res.json({
        name : req.query.name,
        email : req.query.email,
        age: req.query.age
    })
})
app.get("*", (req, res)=>{
    res.status(404).send("Page is not Found")
})

app.listen(3000, ()=>console.log("Our server is up at 3000"))