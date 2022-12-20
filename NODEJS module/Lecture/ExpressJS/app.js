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
const faker = require('faker')
const app = express()

app.set('views', './views')
app.set('view engine', 'ejs')

const userArr = []

for(let i=0;i<10;i++){
    userArr.push({
        name : faker.name.findName(),
        email : faker.internet.email(),
        age: faker.image.image()
    })
}


app.get("/", (req, res)=>{
    res.render("user.ejs", {user: userArr[0]})
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