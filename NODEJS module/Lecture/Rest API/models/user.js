const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true },
    password: { type: String, min: 6, max: 16 },
    age: Number
}, { timestamps: true })

const userModel = mongoose.model('User', userSchema)

module.exports = userModel