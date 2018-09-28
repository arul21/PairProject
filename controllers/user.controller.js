const Model = require('../models/index')
const {decode} = require('../helpers/hash.helper')

module.exports={
    signup : (req,res)=>{
        if(req.session.user) {
            res.redirect('/') 
        }
        res.render('signup',{err:null})
    },
    doSignUp : (req,res)=>{
        Model.User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })
        .then(data=>{
            res.redirect('/user/signin',{err:null})
        })
        .catch(err=>{
            //res.send(err)
            res.render('signup',{err:err.message})
        })
    },
    signin : (req,res)=>{
        if(req.session.user) {
            res.redirect('/') 
        }
        res.render('signin')
    },
    doSignIn : (req,res)=>{
        Model.User.findOne({
            where: {
                email : req.body.email,
            }
        })
        .then(data=>{
            if(decode(req.body.password,data.password)){
                req.session.user = {
                    id : data.id,
                    name : data.name,
                    email : data.email,
                    role : data.role
                }
                res.redirect('/')
            }else{
                res.redirect('/user/signin')
            }
        })
    },
    signOut: (req, res) => {
        req.session.user = null
        res.redirect('/')
    }
}