const mongoose = require('mongoose')
// const bcrypt = require('bcrypt')
// const jwt = require('jsonwebtoken')
const Schema = mongoose.Schema

const User= new Schema({
    username: {
        type: String
    },
    name:{
        type: String,
    },
    password: {
        type: String,
       
    },
    email:{
        type: String,
    },
    phone:{
        type: String,
    },
    img:{
        type: String,
    },
    address:{
        type:String,
    }},{
        timestamps:true,
    })

    // / methods ======================/
    // phương thực sinh chuỗi hash
    // User.methods.generateHash = function (password) {
    //     return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
    // };
    // // kiểm tra password có hợp lệ không
    // User.methods.validPassword = function (password) {
    //     return bcrypt.compareSync(password, this.local.password);
    // };
   
    module.exports = mongoose.model('User',User)

