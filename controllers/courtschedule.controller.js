const Model = require('../models')

module.exports = {
  getAll: (req, res) => {
    Model.Court.findAll()
    .then(found => {
      const court = found
      Model.Schedule.findAll()
      .then(hasil => {
        const schedule = hasil
        Model.CourtSchedule.findAll({
          include: [{model: Model.Schedule}, {model: Model.Court}]
        })
        .then(cs => {
          if(!req.session.user) {
            res.redirect('/user/signin') 
          }
          res.render('courtschedule', {cs, court, schedule})
          // res.send(cs)
        })
      })
    })
  },
  add: (req, res) => {
    Model.CourtSchedule.create({CourtId: req.body.CourtId, ScheduleId: req.body.ScheduleId, price: req.body.price, status: 'available'})
    .then(() => {
      res.redirect('/courtschedule')
    })
  },
  remove: (req, res) => {
    Model.Court.destroy({where: {id: req.params.id}})
    .then(() => {
      res.redirect('/court')
    })
  }
}