const router = require('express').Router()
const user = require('./user.router')
const court = require('./court.router')
const schedule = require('./schedule.router')
const courtschedule = require('./courtschedule.router')
const home = require('./home.router')
const book = require('./booking.router')


router.use('/user',user)
router.use('/court',court)
router.use('/schedule',schedule)
router.use('/courtschedule',courtschedule)
router.get('/', home) 
router.use('/book', book) 

module.exports = router