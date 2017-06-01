const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');


// set up express app
const app = express();

// connect to Mongodb

mongoose.connect('mongodb://127.0.0.1:27017/AviatoAPI');
mongoose.connection.once('open', function () {
	console.log('Connection with AviatoAPI has been established')
}).on('error', function (error) {
	console.log('Connection Error', error)
})

mongoose.Promise = global.Promise;

app.use(cors())

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended:true }))

app.use(require('./routes'))

// listen for requests
app.listen(process.env.port || 3000, function () {
  console.log('API listening for requests now')
});