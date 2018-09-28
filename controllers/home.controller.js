const Model = require('../models')
const op = require('sequelize').Op

module.exports = {
  getAll: (req, res) => {
    Model.CourtSchedule.findAll({
      include: [{model: Model.Schedule}, {model: Model.Court}],
      where: {
        status: {
        [op.ne]: 'booked'
        }
      }
    })
    .then(cs => {
      //res.send(cs)
      res.render('home', {cs})
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