const { MongoClient } = require('mongodb');
const faker = require('faker')
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'userDB';

async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('employee');


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
    // the following code examples can be pasted here...

    // const data = await collection.insertOne({name: "Neelesh", email: "neelesh1517@gmail.com"})
    // console.log(data)

    // const emp = await employee.insertOne({ name: "Neelesh", email: "neelesh1517@gmail.com" })
    // console.log(emp)
    // const emp = await collection.insertMany(empArr)
    // console.log(emp)

    // for find all the minor users
    // const data = await collection.find({salary: {$gt : 10000}}).toArray()
    // console.log(data);
    // return 'done.';

    //sorting data

    const data = await collection.find({}).sort({salary : -1}).skip(1).limit(1).toArray()
    console.log(data);
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());