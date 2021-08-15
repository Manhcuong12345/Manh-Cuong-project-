const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    address:{
        type:String
    }
})

const User = mongoose.model('User', UserSchema)

exports.User = User