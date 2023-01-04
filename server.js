const express = require('express')
const mongoose = require('mongoose')
const userRoute = require('./routers/user.router')
const app = express()

app.use(express.json())



mongoose.connect("mongodb://127.0.0.1:27017/rest-api",{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log('db connected'))
.catch((err)=>console.log(err))

app.use('/',userRoute)



app.listen(3000,()=>console.log('server is ready'))