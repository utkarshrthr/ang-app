const mongoose = require('./dbconfig')
const userModel = require('./models/UserModel')
const cors = require('cors');

const express = require('express')
//const bodyParser = require('body-parser') 
const app  = express()
app.use(express.json());
app.use(cors());
app.listen(4445, ()=> console.log('Server started on http://localhost:4445'))

app.get('/users', cors(), (rqq, res)=>{
	userModel.find({}, '-_id', function (err, user) { 
		res.send(user);       
	});
});
