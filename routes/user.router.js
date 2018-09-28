const router = require('express').Router()
const {signup,doSignUp,signin,doSignIn, signOut} = require('../controllers/user.controller')

router.get('/signup', signup)
router.post('/signup', doSignUp)
router.get('/signin',signin)
router.post('/signin',doSignIn)
router.get('/signout',signOut)

module.exports = router