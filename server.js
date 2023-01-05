const express = require('express')
const mongoose = require('mongoose')
const userRoute = require('./routers/user.router')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin',"*")
    res.setHeader('Access-Control-Request-Method',"*")
    res.setHeader('Access-Control-Allow-Headers',"*")
    next()
})



mongoose.connect("mongodb://127.0.0.1:27017/rest-api",{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log('db connected'))
.catch((err)=>console.log(err))

app.use('/',userRoute)



app.listen(5000,()=>console.log('server is ready'))