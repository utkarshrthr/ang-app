const mongoose = require('mongoose')

// npm install mongoose

const mongoDb = 'mongodb://127.0.0.1:27017/deepak'

mongoose.connect(mongoDb)

mongoose.Promise = global.Promise;

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Some error occurred')) 

module.exports = mongoose;