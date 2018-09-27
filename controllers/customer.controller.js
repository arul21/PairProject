const Model = require('../models')

module.exports ={
    viewCustomer : (req,res)=>{
        Model.Customer.findAll({
            order : ['id']
        })
        .then(data=>{
            res.render('customer', {data:data})
        })
        .catch(err=>{
            res.send(err)
        })
    },
    add : (req,res)=>{
        res.render('addCustomer')
    },
    regCustomer: (req,res)=>{
        Model.Customer.create({
            name : req.body.name,
            email : req.body.email,
            phone : req.body.phone
        })
        .then(data=>{
            res.redirect('/customer/all')
        })
        .catch(err=>{
            res.send(err)
        })
    },
    
}