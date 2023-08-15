const express = require('express');
const router = express.Router()
const controllerAuth = require('../controllers/authController');

router.get ('/', controllerAuth.test)
router.get ('/users', controllerAuth.get)
router.post ('/signup', controllerAuth.signUp)

module.exports = router;
