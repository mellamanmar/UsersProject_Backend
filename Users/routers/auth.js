const express = require('express');
const router = express.Router()
const controllerUser = require('../controllers/authController');

router.get ('/', controllerUser.test)
router.post ('/signup', controllerUser.signUp)

module.exports = router;
