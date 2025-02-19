const express = require('express')
const router = express.Router();

const questionController = require('../controllers/question')

router.get('/', questionController.getAllQuestion);
router.post('/postquestion', questionController.postQuestion)
router.post('/:id', questionController.findById)

module.exports = router