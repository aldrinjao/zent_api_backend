const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Reading = new Schema({
	device: {
		type: String
	},
	timestamp: {
	    type: Date
	},
	mrid:{
			type: Number
	},
	values:[{
		units: {
			type: String
		},
		description: {
			type: String
		},
		value: {
			type: Number
		},
		error: {
			type: String
		}
	}]

}, {
   collection: 'Readings'
})

module.exports = mongoose.model('Reading', Reading)
