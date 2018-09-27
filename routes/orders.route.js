const router = require('express').Router()
const {loginOrder_get,loginOrder_post,userOrder_get} = require('../controllers/order.controller')


router.get('/login', loginOrder_get);
router.post('/login', loginOrder_post);
router.get('/user', function(req,res,next){
    if(req.session.user)
        next()
    else
        res.redirect('/orders/login')
}, userOrder_get);

// router.get('/vieworder', viewOrder_get);



module.exports = router