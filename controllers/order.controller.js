const Model = require('../models')
var session = require('express-session');

module.exports ={

    loginOrder_get: (req,res)=>{
        //res.send(`testddgf`)
        Model.Courts.findAll({
        })
        .then((courts) => {
            res.render('loginOrder',{courts:courts});

        }).catch((err) => {
            res.send( `order.controller_loginOrder_get ${err}`)
        });
    },

    loginOrder_post: (req,res)=>{
        //res.send(req.body)

        Model.Customer.findOne({
            where:{ id:req.body.id, phone:req.body.phone}
        })
        .then((result) => {
            //res.send(`loginnnnn`)
            if(result){
                //console.log(req.session)
                req.session.user={
                    id:req.body.id,
                    phone:req.body.phone
                }
                
                //res.render('order',{court:req.body.})
                //res.send(req.session)
                //res.redirect('/orders');
                //res.send(`loginnnnn`)
                res.redirect('/orders/user')
                // Model.Schedule.findAll({
                //     order: [['id', 'ASC']],
                //     include :{
                //         model: Model.ScheduleOrder,
                //         include : {model:Model.GridOrder}
                //     }
                // })
                // .then((schedules) => {
                //     //res.send(schedules)

                    
                //     res.render('order',{schedules:schedules})
                // }).catch((err) => {
                //     res.send(err)
                // });
               
            }else
                res.redirect('/orders/login');

        }).catch((err) => {
            res.send( `order.controller loginOrder_post: ${err}`)
        });
    },
    
    userOrder_get: (req,res)=>{
         Model.Schedule.findAll({
            order: [['id', 'ASC']],
            include :{
                model: Model.ScheduleOrder,
                include : {model:Model.GridOrder}
            }
        })
        .then((schedules) => {
            //res.send(schedules)    
            res.render('order',{schedules:schedules})
        }).catch((err) => {
            res.send(err)
        });
    }
    




}