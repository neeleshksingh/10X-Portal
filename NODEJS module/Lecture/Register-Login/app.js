const express = require('express')
const mongoose = require('mongoose')
const connection = require('./connection/connection')
connection()
const User = require('./models/user')
const bodyParser = require('body-parser')
const loginRoutes = require('./routes/login')
const userRoutes = require('./routes/user')
const app = express()

app.use("/api/v1", loginRoutes)
app.use("/api/v1/users", userRoutes)

app.get("*", (req, res) => {
    res.status(404).send("API IS NOT FOUND");
})

app.listen(5000, () => console.log("Our server is up and running at port 5000"))