const express = require('express')
const User = require('../models/user')
const bodyParser = require('body-parser')

const router = express.Router()

// parse application/x-www-form-urlencoded
router.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
router.use(bodyParser.json())

router.post("/", async (req, res) => {
    // Write the code to create data in database
    try{
        const user = await User.create(req.body);
        res.status(201).json({
            status: "Success",
            user
        })
    }catch(e) {
        res.status(500).json({
            status: "Failed",
            message: e.message
        })
    }

});

// Read all the Users -- GET Method
router.get("/", async (req, res) => {
    // Write the ,code to fetch the data
    try{
        const users = await User.find();
        
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

// Logical nesting : GET a specific user
router.get("/:id", async (req, res) => {
    // Write the ,code to fetch the data
    try{
        const user = await User.find({_id : req.params.id});
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


// update data : PUT Method 
router.put("/:id", async (req, res) => {
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

// delete data : Delete Method 
router.delete("/:id", async (req, res) => {
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

module.exports = router;