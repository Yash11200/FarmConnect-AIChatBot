const express = require('express')
const router = express.Router();

const userRoute = require('./userRoutes');
const questionRoute = require('./questionRoutes')

router.use('/user', userRoute)
router.use('/question', questionRoute)

module.exports = router;