const express = require('express')
const { body, validationResult } = require('express-validator')
const bodyParser = require('body-parser')
const User = require('../models/user')

const router = express.Router()
router.use(bodyParser.json())

router.post("/register", (req, res) => {
    //user id and password needed
    // 1. Validate the data
    body('email').isEmail(),
    body('password').isLength({min:6,max:12}),
    body('name').isAlpha(), async(req, res)=>{
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()})
        }
    // 2. Check Username is already exist or not
    const {name, email, password} = req.body
    const user = await User.findOne({email})    
    if(user){
        return res.status(409).json({
            status: "Failed",
            message: "User is already exists"
        })
    }
    // 3. If user is new, create new entry
    const data= await User.create(req.body)
    res.json({
        status: "Success",
        data
    })
    }
})

module.exports = router