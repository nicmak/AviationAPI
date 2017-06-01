const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Create Airport Schema & Model

const WeatherSchema = new Schema({
	datetime: {
		type:String
	},
	visibility: {
		type:Number
	},
	wind: {
		type:Number
	},
	precipitation: {
		type:Number
	},
	freezing: {
		type:Number
	},
	dangerous: {
		type:Number
	}
})

module.export = WeatherSchema;