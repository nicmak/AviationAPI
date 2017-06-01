const express = require('express');
const router = express.Router();
const airportRouter = require('./controllers/airport')

router.use('/airport', airportRouter)


module.exports = router;