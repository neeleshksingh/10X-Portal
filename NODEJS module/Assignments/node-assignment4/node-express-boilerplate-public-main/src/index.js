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
app.get('/', (req, res) => {
    res.send('Hello World !')
})
app.post('/add', (req, res) => {
    console.log(req.body);
    const num1 = req.body.num1
    const num2 = req.body.num2
    if (isNaN(num1) || isNaN(num2))
        return res.status(400).json({
            "status": "Error",
            "message": "Input must be numeric"
        })
    if (num1 === "" || num2 == "") {
        return res.status(400).json({
            "status": "Error",
            "message": "Input must not be empty"
        })
    }
    let sum = 0
    res.status(200).json({
        "status": "Success",
        "message": "the sum of given two numbers",
        "sum": num1 + num2
    })
})
app.post('/mul', (req, res) => {
    console.log(req.body);
    const num1 = req.body.num1
    const num2 = req.body.num2
    if (isNaN(num1) || isNaN(num2))
        return res.status(400).json({
            "status": "Error",
            "message": "Input must be numeric"
        })
    if (num1 === "" || num2 == "") {
        return res.status(400).json({
            "status": "Error",
            "message": "Input must not be empty"
        })
    }
    let mul = 0
    res.status(200).json({
        "status": "Success",
        "message": "the mul of given two numbers",
        "mul": num1 * num2
    })
})
app.post('/div', (req, res) => {
    console.log(req.body);
    const num1 = req.body.num1
    const num2 = req.body.num2
    if (isNaN(num1) || isNaN(num2))
        return res.status(400).json({
            "status": "Error",
            "message": "Input must be numeric"
        })
    if (num1 === "" || num2 == "") {
        return res.status(400).json({
            "status": "Error",
            "message": "Input must not be empty"
        })
    }
    let div = 0
    res.status(200).json({
        "status": "Success",
        "message": "the mul of given two numbers",
        "div": num1 / num2
    })
})
app.post('/sub', (req, res) => {
    console.log(req.body);
    const num1 = req.body.num1
    const num2 = req.body.num2
    if (isNaN(num1) || isNaN(num2))
        return res.status(400).json({
            "status": "Error",
            "message": "Input must be numeric"
        })
    if (num1 === "" || num2 == "") {
        return res.status(400).json({
            "status": "Error",
            "message": "Input must not be empty"
        })
    }
    let sub = 0
    res.status(200).json({
        "status": "Success",
        "message": "the sub of given two numbers",
        "sub": num1 - num2
    })
})

app.listen(3000, (res) => { console.log(`App listening on port ${port}!`) })

module.exports = app;