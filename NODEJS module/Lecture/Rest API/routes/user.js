const express = require('express')
const User = require('../models/user')
const bodyParser = require('body-parser')

const router = express.Router()

// parse application/x-www-form-urlencoded
router.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
router.use(bodyParser.json())

router.get("/users", async (req, res) => {
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
router.get('/users', async (req, res) => {
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
router.put("/users/:id", async (req, res) => {
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



router.post('/users', async (req, res) => {
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
router.put('/users', async (req, res) => {
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
router.delete("/users/:id", async (req, res) => {
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

module.exports = User