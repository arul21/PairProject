const router = require('express').Router()
const {getAll, add, remove} = require('../controllers/court.controller')

router.get('/', function(req,res,next){
    if(req.session.user)
        next()
    else
        res.redirect('/user/signin')
}, getAll);
//router.get('/', getAll)
router.post('/add', add)
router.get('/:id/delete', remove)


module.exports = router