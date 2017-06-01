const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const WeatherSchema = require('./weather')

// Create Airport Schema & Model





const AirportSchema = new Schema({
	name: {
		type: String,
		required: [true, 'name is required'] 
	},
	country: {
		type:String,
		required:[true,'country is required']
	},
	weather:[WeatherSchema]
})

const Airport = mongoose.model('airport', AirportSchema)

module.exports = Airport;