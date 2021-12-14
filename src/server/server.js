const mongoose = require('./dbconfig')
const userModel = require('./models/UserModel')

const express = require('express')
const bodyParser = require('body-parser') 
const app  = express()
app.use(express.json());
app.listen(4445, ()=> console.log('Server started on http://localhost:4445'))

app.get('/users', (rqq, res)=>{
	userModel.find({}, function (err, user) { 
		res.send(user);       
	});
});