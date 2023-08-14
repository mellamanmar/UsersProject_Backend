const express = require('express');
const router = express.Router()
const controllerUser = require('../controllers/authController');

router.get ('/', controllerUser.test)

module.exports = router;
