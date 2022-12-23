//const faker = require('faker')
const mongoose = require('mongoose')

async function main() {
    await mongoose.connect('mongodb://localhost/mongoose_test');
    console.log("connection done successfully");

    const Schema = mongoose.Schema
    const ObjectId = Schema.ObjectId

    const userSchema = new Schema({
        name: { type: String, require: true },
        age: Number,
        email: { type: String, unique: true }
    }, { timestamps: true })

    const User = mongoose.model('User', userSchema)

    const data = await User.create({
        name: "Neelesh",
        email: "neel@j.com",
        age: 23
    })
    console.log(data);
}
main()
    .then(console.log)
    .catch(console.error)
    .finally(() => mongoose.disconnect());