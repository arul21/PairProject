const router = require('express').Router()
const {getAll, add, remove} = require('../controllers/schedule.controller')

router.get('/', getAll)
router.post('/add', add)
router.get('/:id/delete', remove)

module.exports = router