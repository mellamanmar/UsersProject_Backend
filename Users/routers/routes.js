const express = require('express');
const router = express.Router()
const controllerAuth = require('../controllers/authController');
const { controllerUser } = require('../controllers/userController');



router.get ('/', controllerAuth.test)
router.get ('/users', controllerAuth.get)
router.post ('/signup', controllerAuth.signUp)
router.post ('/signin', controllerAuth.signIn)
router.get ('/users/:id', controllerUser.getUserProfile)
router.patch ('/edit/:username/:id', controllerUser.editUserProfile)
router.delete ('/edit/delete/:id', controllerUser.deleteUserProfile)

module.exports = router;
