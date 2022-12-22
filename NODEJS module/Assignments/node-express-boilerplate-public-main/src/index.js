const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000



app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here
app.get('', (req,res)=>{
    res.send('Hello World !')
})
app.get('/calc', (req,res)=>{
    res.sendFile(__dirname+"/index.html")
})
app.post('/add', (req, res)=>{
    const n1 = Number(req.body.num1)
    const n2 = Number(req.body.num2)
    const add = Number(n1+n2)
    res.send(JSON.stringify('the sum of given two numbers '+ add))
})
app.listen(3000, (res) => {console.log(`App listening on port ${port}!`)})

module.exports = app;