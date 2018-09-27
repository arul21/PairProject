const Model = require('../models/index')

module.exports = {
    viewAll : (req,res)=>{
        Model.Grid.findAll({
            include :{
                model: Model.Order,
                include : {
                    model: Model.ScheduleOrder,
                    include : {
                        model: Model.Schedule
                    }
                }
            }
        })
        .then(data=>{
            res.send(data)
        })
        .catch(err=>{
            res.send(err)
        })
    }
}