const express = require('express')
const mongoose = require('mongoose')
const connection = require('./connection/connection')
connection()
const User = require('./models/user')
const bodyParser = require('body-parser')

const app = express()
app.use(express.json())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


app.get('/', (req, res) => {
    res.send("welcome to API")
})

app.get("/api/v1/users", async (req, res) => {
    // Write the ,code to fetch the data
    try{
        const {name = "", page = 1, pagesize =5} = req.query;
        console.log(req.query);

        const users = await User.find().skip(pagesize * (page-1)).limit(pagesize);
        
        res.status(200).json({
            status: "Success",
            users
        })
    }catch(e){
        res.status(500).json({
            status: "Failed",
            message: e.message
        })
    }
});
//Read all the users
app.get('/api/v1/users', async (req, res) => {
    try {
        const users = await User.find()
        res.status(200).json({
            status: "Success",
            users
        })
    } catch (e) {
        res.status(400).json({
            status: "Failed",
            message: e.message
        })
    }
})
// update data : PUT Method 
app.put("/api/v1/users/:id", async (req, res) => {
    // Write the ,code to fetch the data
    try{
        await User.updateOne({_id : req.params.id}, req.body);
        const user =  await User.findOne({_id : req.params.id});
        res.status(200).json({
            status: "Success",
            user
        })
    }catch(e){
        res.status(500).json({
            status: "Failed",
            message: e.message
        })
    }
});



app.post('/api/v1/users', async (req, res) => {
    console.log(req.body);
    //Write the code to create data

    try {
        const user = await User.create(req.body)
        res.status(200).json({
            status: "Success",
            user
        })
    } catch(e) {
        res.status(500).json({
            status: "Failed",
            message: e.message
        })
    }
})
app.put('/api/v1/users', async (req, res) => {
    //Write the code to update data
    try {
        await User.updateOne({_id : req.params.id}, req.body)
        const user = await User.findOne({_id : req.params.id})
        res.status(200).json({
            status: "Success",
            user
        })
    } catch(e) {
        res.status(500).json({
            status: "Failed",
            message: e.message
        })
    }
}) 
// delete data : Delete Method 
app.delete("/api/v1/users/:id", async (req, res) => {
    // Write the ,code to fetch the data
    try{
        const user = await User.deleteOne({_id : req.params.id});
        res.status(200).json({
            status: "Success",
            user
        })
    }catch(e){
        res.status(500).json({
            status: "Failed",
            message: e.message
        })
    }
});
app.get("*", (req, res) => {
    res.status(404).send("API IS NOT FOUND");
})

app.put("*", (req, res) => {
    res.status(404).send("API IS NOT FOUND");
})
app.post("*", (req, res) => {
    res.status(404).send("API IS NOT FOUND");
})
app.delete("*", (req, res) => {
    res.status(404).send("API IS NOT FOUND");
})

app.listen(5000, () => console.log("Our server is up and running at port 5000"))