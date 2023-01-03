const express = require('express')
const mongoose = require('mongoose')
const connection = require('./connection/connection')
connection()
const User = require('./models/user')
const bodyParser = require('body-parser')

const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


app.get('/', (req, res) => {
    res.send("welcome to API")
})

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
app.get('/api/v1/users:id', async (req, res) => {
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

app.post('/api/v1/users', async (req, res) => {
    //Write the code to create data
    try {
        const user = await User.create(req.body)
        res.status(200).json({
            status: "Success",
            user
        })
    } catch (e) {
        res.status(400).json({
            status: "Failed",
            message: e.message
        })
    }
})

app.get('*', (req, res) => {
    res.status(404).send("API is not found")
})

app.listen(5000, () => console.log("Our server is up and running at port 5000"))