const router = require('express').Router()
const {add} = require('../controllers/booking.controller')

router.post('/add', add)

module.exports = router