const Model = require('../models')
const sgMail = require('@sendgrid/mail')

module.exports = {
  add: (req, res) => {
    // console.log(req.body)
    sgMail.setApiKey('')
      const msg = {
          to: req.body.email,
          from: 'ekomasukkpak@gmail.com',
          subject: 'Success For Booking',
          text: 'Thanks Booking',
          html: `<p>Hello, ${req.body.nama}, your book is ${req.body.court} with time ${req.body.waktu}<br>, please pay before schedule today with ${req.body.harga}</p>`,
      }
      sgMail.send(msg)
    Model.Booking.create({UserId: req.body.id, CourtScheduleId: req.body.book, status: 'booked'})
    .then(() => {
      Model.CourtSchedule.update({status: 'booked'}, {where: {id:req.body.book}})
      .then(()=> {
        res.redirect('/')
      })
    })
  }
}
