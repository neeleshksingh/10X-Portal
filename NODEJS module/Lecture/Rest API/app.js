const express = require('express')
const app = express()

app.get('/', (req, res)=>{
    res.send("welcome to API")
})
app.get('*', (req, res)=>{
    res.status(404).send("API is not found")
})

app.listen(5000, ()=>console.log("Our server is up and running at port 5000"))