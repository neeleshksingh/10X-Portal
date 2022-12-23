const faker = require('faker')
const mongoose = require('mongoose')

async function main(){
    await mongoose.connect('mongodb://localhost/mongoose_test');
    console.log("connection done successfully");
}
main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());