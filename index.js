const express = require('express')
const app = express()
const router = require('./routes')
var session = require('express-session')

app.set('view engine','ejs')
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.set('trust proxy', 1) // trust first proxy
app.use(
  session({
    key:'keyuser',
    secret: 'ini secret',
    resave: false,
    saveUninitialized: true})
    )

app.use('/',router)

app.listen(1080, function(){
    console.log('live on port 1080');  
})

