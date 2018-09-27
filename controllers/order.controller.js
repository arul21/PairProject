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
                Model.Schedule.findAll()
                .then((schedules) => {
                    //res.send(schedules)
                    res.render('order',{schedules:schedules})
                }).catch((err) => {
                    res.send(err)
                });
                // Model.Grid.findAll({
                //     include :{
                //         model: Model.Order,
                //         include : {
                //             model: Model.ScheduleOrder,
                //             include : {
                //                 model: Model.Schedule
                //             }
                //             }
                //         },where:{CourtId:1}

                // })
                // .then(data=>{
                   
                    
                // })
                // .catch(err=>{
                //     res.send(err)
                // })
            }else
                res.redirect('/loginOrder');

        }).catch((err) => {
            res.send( `order.controller loginOrder_post: ${err}`)
        });
    },
    
    order_get: (req,res)=>{
        if(req.session.phone){
            res.send(`login`)
        }else
            res.redirect('/loginOrder');
    }
    




}