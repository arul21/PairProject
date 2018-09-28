const router = require('express').Router()
const {getAll, add} = require('../controllers/courtschedule.controller')

router.get('/', getAll)
router.post('/add', add)

module.exports = router