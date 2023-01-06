const mongoose = require('mongoose')
async function getConnection() {
    await mongoose.connect('mongodb://localhost/restapi')
}
module.exports = getConnection