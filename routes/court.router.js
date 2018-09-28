const router = require('express').Router()
const {getAll, add, remove} = require('../controllers/court.controller')

router.get('/', getAll)
router.post('/add', add)
router.get('/:id/delete', remove)

module.exports = router