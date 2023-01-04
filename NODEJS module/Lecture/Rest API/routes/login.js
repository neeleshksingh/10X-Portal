const express = require('express')
const { body, validationResult } = require('express-validator')
const bodyParser = require('body-parser')
const User = require('../models/user')
const bcrypt = require('bcrypt')

const router = express.Router()
router.use(bodyParser.json())

router.post("/register", (req, res) => {
    //user id and password needed
    // 1. Validate the data
    body('email').isEmail(),
        body('password').isLength({ min: 6, max: 12 }),
        body('name').isAlpha(), async (req, res) => {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() })
            }
            // 2. Check Username is already exist or not
            const { name, email, password } = req.body
            const user = await User.findOne({ email })
            if (user) {
                return res.status(409).json({
                    status: "Failed",
                    message: "User is already exists"
                })
            }
            // 3. If user is new, create new entry
            bcrypt.hash(myPlaintextPassword, 10, async function (err, hash) {
                // Store hash in your password DB.
                if (err) {
                    return res.status(500).json({
                        status: "Failed",
                        message: err.message
                    })
                }
                const data = await User.create({
                    name,
                    email,
                    password: hash
                })
                return res.status(200).json({
                    status: "Success",
                    message: "User successfully registerd",
                    data
                })
            })

        }
})

module.exports = router