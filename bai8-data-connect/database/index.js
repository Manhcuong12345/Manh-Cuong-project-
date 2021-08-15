const mongoose = require('mongoose');

async function connect(){
   try{
    await mongoose.connect('mongodb://localhost:27017/thuctap') 
    .then(()=>{console.log('connect fullfill')})
    .catch(err=>{console.log('connect fail!!')})
    
   }catch(e){
    console.log('Connect fail!!!')
   }
}

module.exports = connect