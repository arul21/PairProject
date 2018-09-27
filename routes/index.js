const router = require('express').Router()
const customer = require('./customers.route')
const order = require('./order.router')
const grid = require('./grid.router')


router.use('/customer',customer)
router.use('/order', order)
router.use('/grid',grid)


router.get('/', function (req,res){
    res.render('home')   
})




module.exports =router
