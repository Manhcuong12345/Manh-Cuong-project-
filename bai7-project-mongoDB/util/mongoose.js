//Tac dung ham nay la no nhan doi so vao roi no map qua thu object 
// tu phan tu ben trong
module.exports = {
    //truyen ra 2 function de xu ly co khita nhan nhieu du lieu
    //Ham xu lay array
    mutipleMongooseToObject: function (mongoose) {
        // truyen thang course vao sau do tra ve object
        return mongoose.map(mongoose=>mongoose.toObject())
    },
    //Neu la 1 bang, hoac 1 docum gi do
    mongooseToObject:function (mongoose) {
    //Neu co mongo thi in ra object neu khong in ra chinh no
        return mongoose ? mongoose.toObject(): mongoose
    }
}