const router = require('express').Router()
const customer = require('./customers.route')
const orders = require('./orders.route')
const grid = require('./grid.router')

router.use('/customer',customer)
router.use('/orders',orders)
router.use('/grid',grid)


module.exports =router

