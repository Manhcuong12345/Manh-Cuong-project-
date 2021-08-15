//Viet ham ket noi
const mongoose = require('mongoose');
async function connect(){
   try{
    await mongoose.connect('mongodb+srv://manh:manh@cluster0.mkyci.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
      });
      console.log('Connect successfully')
   }catch(e){
    console.log('Connect fail!!!')
   }
}

module.exports = {connect}