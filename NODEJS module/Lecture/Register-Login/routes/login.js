const express = require('express')
const { body, validationResult } = require('express-validator')
const bodyParser = require('body-parser')
const User = require('../models/user')
const bcrypt = require('bcrypt')

const router = express.Router()
router.use(bodyParser.json())

router.post("/register", // username must be an email
    body('email').isEmail(),
    // password must be at least 5 chars long
    body('password').isLength({ min: 5, max: 12 }),
    body("name").isAlpha(), async (req, res) => {
        // 3. User is new, we will register

        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            // 2. check Username already exists
            const { name, email, password } = req.body;

            const user = await User.findOne({ email });
            if (user) {
                return res.status(409).json({
                    status: "Failed",
                    message: "User already exists"
                });
            }
            // 3. Create the new user in database
            bcrypt.hash(password, 10, async function (err, hash) {
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
                });
                return res.status(200).json({
                    status: "Success",
                    message: "User successfuully registerd",
                    data
                })
            });
        } catch (e) {
            return res.status(500).json({
                status: "Failed",
                message: "Registration =unsuccessful"
            })
        }
    });


router.post("/login", // username must be an email
    body('email').isEmail(), async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            // 2. check Username already exists
            const { name, email, password } = req.body;

            const user = await User.findOne({ email });
            if (!user) {
                return res.status(400).json({
                    status: "Failed",
                    message: "Unnown user/ User is not registered"
                })
            }
            // Load hash from your password DB.
            bcrypt.compare(password, user.password, function (err, result) {
                // result == true
                if (err) {
                    return res.status(500).json({
                        status: "Failed",
                        message: err.message
                    })
                }
                if (result) {
                    return res.status(200).json({
                        status: "Succces",
                        message: "Login successful"
                    })
                } else {
                    return res.status(400).json({
                        status: "Failed",
                        message: "Invalid credentails"
                    })
                }
            });


        } catch (e) {
            return res.status(500).json({
                status: "Failed",
                message: e.message
            })
        }
        // Finds the validation errors in this request and wraps them in an object with handy functions
        // 1. Validate the data 
    });
module.exports = router;