const mongoose = require('mongoose')

async function connect(){
    try{
    //cau hinh database
     await mongoose.connect('mongodb://localhost:27017/mvc_project',{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
     })
     console.log('Connect is successfully!!')
    }catch(err){
        console.log('Connect fail!!')
    }
}

module.exports = connect