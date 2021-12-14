const mongoose = require('../dbconfig')

const userSchema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	userId: {
		type:Number,
		required:true,
		unique: true
	},
    name: {
		type:String,
		required:true,
		unique: true
	},
    details: {
		type:String,
		required:true,
		unique: true
	},
    isAccepted: {
		type:Boolean,
		required:true,
		unique: true
	},
    date: {
		type:Date,
		required:true,
		unique: true
	},
    address: {
		type:String,
		required:true,
		unique: true
	},
    contact: {
		type:String,
		required:true,
		unique: true
	}
}, { collection : 'users' });


const user = mongoose.model('users', userSchema);

module.exports = user