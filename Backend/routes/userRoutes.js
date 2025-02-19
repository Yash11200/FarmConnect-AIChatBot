const express = require('express')
const router = express.Router();
const userController = require('../controllers/user')

router.get('/', userController.getAllUser);
router.post('/createuser', userController.createUser);

module.exports = router;