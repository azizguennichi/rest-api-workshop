const mongoose = require('mongoose')

let userSchema = mongoose.Schema({
    name:String,
    email:String,
    age:Number,
    userId:String

})

module.exports = mongoose.model('man',userSchema)
// var url = 'mongodb://127.0.0.1:27017/rest-api'


