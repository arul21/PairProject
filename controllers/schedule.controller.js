const Model = require('../models')

module.exports = {
  getAll: (req, res) => {
    Model.Schedule.findAll()
    .then(found => {
      if(!req.session.user) {
        res.redirect('/user/signin') 
      }
      res.render('schedule', {found})
    })
  },
  add: (req, res) => {
    Model.Schedule.create({
      startTime: req.body.startTime,
      endTime: req.body.endTime
    })
    .then(() => {
      res.redirect('/schedule')
    })
  },
  remove: (req, res) => {
    Model.Schedule.destroy({where: {id: req.params.id}})
    .then(() => {
      res.redirect('/schedule')
    })
  }
}