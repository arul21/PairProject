const express = require('express')
const app = express()
const router = require('./routes')
const session = require('express-session')

app.use(session({
    secret: 'thesecret',
    resave: false,
    saveUninitialized : true
}))
app.use((req,res,next)=>{
    res.locals.user = req.session.user
    next()
})
app.set('view engine','ejs')
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use('/',router)

app.listen(1080, function(){
    console.log('live on port 1080');  
})