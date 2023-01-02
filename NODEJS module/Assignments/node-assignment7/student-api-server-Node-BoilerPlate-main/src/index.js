const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const studentArray = require('./InitialData')
const port = 8080
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// your code goes here
app.get('/api/student', (req, res)=>{

   
})
app.get('/api/student/:id', (req, res)=>{
    const index = studentArray.findIndex(element => element.id == req.params.id)
    if(index >= 0){
        const student = studentArray[index]
        res.json({
            status: "success",
            student
        })
    }
    else{
        res.status(400).json({
            status: "failed",
            message: 'student record not found'
        })
    }
    console.log(req.params);
    res.send('ok')
})

app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;   