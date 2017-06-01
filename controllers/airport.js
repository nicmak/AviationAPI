const express = require('express');
const router = express.Router();
const Airport = require('../models/airport')

router.get('/all', function (req, res) {
	res.json({message:'Getting all the airports'})
})

router.post('/send', function (req, res) {
	console.log(req.body)
	Airport.create(req.body).then(function(airport) {
	  res.status(200).json(airport);		
	})
})

router.put('/:id', function(req, res) {
	 let idNum = req.params.id
	 res.send(`You are editing id number: ${idNum}`)
})

router.delete('/:id', function(req, res) {
	let idNum = req.params.id
	res.send(`You are deleting id number: ${idNum}`)
})

module.exports = router;