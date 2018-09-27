const router = require('express').Router()
const customer = require('./customers.route')


router.use('/customer',customer)




module.exports =router
