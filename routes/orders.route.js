const router = require('express').Router()
const {loginOrder_get,loginOrder_post} = require('../controllers/order.controller')


router.get('/login', loginOrder_get);
router.post('/login', loginOrder_post);

// router.get('/vieworder', viewOrder_get);



module.exports = router