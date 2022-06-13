
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( 


{
	
	userId: String,
	productId:String,
	amount: 0,
	isFreeAppUser: Boolean, 
	date: {type : String,
		default:"22/11/2021"}

} , { timestamps: true });


module.exports = mongoose.model('Ordercreated', bookSchema) //users