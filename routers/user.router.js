const route = require('express').Router()
const db = require('../db/db')

route.post('/saveUser',(req,res)=>{
  db.saveUsers(req.body)
  .then(()=>res.send('saved'))
  .catch((err)=>res.send(err))
})

route.get('/users',(req,res)=>{
    db.getUsers()
    .then((data)=>res.send(data))
    .catch((err)=>res.send(err))
  })
  
  route.patch('/user/:id',(req,res)=>{
    db.UpdateUserWithId(req.params.id,req.body.name)
    .then((doc)=>res.send(doc))
    .catch((err)=>res.send(err))
  })

  route.patch('/user',(req,res)=>{
    db.UpdateUserWithEmail(req.body.email,req.body.name)
    .then((doc)=>res.send(doc))
    .catch((err)=>res.send(err))
  })

  route.put('/user/put',(req,res)=>{
    db.UpdateUserWithEmail(req.body.email,req.body.name)
    .then((doc)=>res.send(doc))
    .catch((err)=>res.send(err))
  })


  route.delete('/user/delete/:id',(req,res)=>{
    db.deleteUserWithId(req.params.id)
    .then((doc)=>res.send(doc))
    .catch((err)=>res.send(err))
  })
  
  
  route.delete('/user/delete',(req,res)=>{
    db.deleteUserWithEmail(req.body.email)
    .then((doc)=>res.send(doc))
    .catch((err)=>res.send(err))
  })


module.exports = route