const User = require('../models/user.model')

exports.saveUsers=({name,email,age,password})=>{
    const person = new User({
        name:name,
        email:email,
        age:age,
        password
    })
    return person.save()
}





exports.getUsers=()=>{
    return User.find()
}

exports.DefindOneAndDeleteUserWithId=(id,name)=>{
    return User.updateOne({id:id},{name:name})
}

exports.UpdateUserWithEmail=(email,name)=>{
    return User.findOneAndUpdate({email:email},{name:name},{new:true})
}



exports.deleteUserWithId=(id)=>{
    return User.deleteOne({id:id})
}

exports.deleteUserWithEmail=(email)=>{
    return User.findOneAndDelete({email:email},{new:true})
}

