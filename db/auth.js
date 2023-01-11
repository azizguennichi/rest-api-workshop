const User = require('../models/user.model')
const bcrypt = require('bcrypt')

exports.Register=({name,email,age,password})=>{
    return User.findOne({email:email}).then((doc)=>{
        if(doc){
            console.log('this email is exist')
            const data = "exist"
            return data
        }else{
            bcrypt.hash(password,10).then((hashedPassword)=>{
                let user = new User({
                    name:name,
                    email:email,
                    age:age,
                    password:hashedPassword
                })
                user.save().then((user)=>{
                    console.log(user)
                }).catch((err)=>{
                    console.log(err)
                })
            }).catch((err)=>console.log(err))
        }
    }).catch((err)=>console.log(err))
}

exports.Login=({email,password})=>{
    
    return User.findOne({email:email}).then((user)=>{
        if(!user){
            console.log('we dont have this email')
        }else{
            bcrypt.compare(password,user.password).then((same)=>{
                if(!same){
                    console.log('invalid password')
                }else{
                    console.log(same)
                }
            })
        }
    })
}