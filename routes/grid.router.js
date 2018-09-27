const router = require('express').Router()
const {viewAll} = require('../controllers/grid.controller')


router.get('/', viewAll)




module.exports = router