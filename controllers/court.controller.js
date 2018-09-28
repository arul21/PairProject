const Model = require('../models')

module.exports = {
  getAll: (req, res) => {
    Model.Court.findAll()
    .then(found => {
      if(!req.session.user) {
        res.redirect('/user/signin') 
      }
      res.render('court', {found})
    })
  },
  add: (req, res) => {
    Model.Court.create({name: req.body.name})
    .then(() => {
      res.redirect('/court')
    })
  },
  remove: (req, res) => {
    Model.Court.destroy({where: {id: req.params.id}})
    .then(() => {
      res.redirect('/court')
    })
  }
}