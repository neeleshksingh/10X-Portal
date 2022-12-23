const faker = require('faker')
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

    // const empArr = []
    // for (let i = 0; i < 50; i++) {
    //     empArr.push({
    //         name: faker.name.findName(),
    //         email: faker.internet.email(),
    //         card: faker.helpers.createCard(),
    //         salary: Math.ceil((Math.random() + 1) * 10000),
    //         company: faker.company.companyName()
    //     })
    // }
    // const data = await User.create(empArr)
    // console.log(data);

    // const data = await User.find({name: {$lt: "David"}})
    // console.log(data);
}
main()
    .then(console.log)
    .catch(console.error)
    .finally(() => mongoose.disconnect());