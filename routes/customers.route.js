const router = require('express').Router()
const {regCustomer, viewCustomer, add} = require('../controllers/customer.controller')


router.get('/all', viewCustomer)
router.get('/registrasi', add)
router.post('/registrasi', regCustomer)





module.exports = router