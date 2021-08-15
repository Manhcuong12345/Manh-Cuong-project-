const mongoose = require('mongoose')
//Khai bao mongoose slguf bao mongoose
const slug = require('mongoose-slug-generator')
const Schema = mongoose.Schema

mongoose.plugin(slug);
//xuat ra phan course
const Course = new Schema({
    // name: { type: String, maxlength:50 },
    name: { type: String, required: true,},
    // desc: { type: String, maxlength:100 },
    // img: { type: String,maxlength:200 },
    desc: { type: String },
    img: { type: String},
    //tu them chuoi
    slug: { type: String, slug: 'name' },
    videoId: { type: String, required: true, },
    level: { type: String },
    //Ngay tao va ngay cap nhat
    // createAt: { type:Date,default:Date.now},
    // updateAt: { type:Date,default:Date.now},
  },{
    timestamps:true,
  });
//  const Course = new Schema({
//     title: String,
//     body: String,
//     date: Date
//   });


  module.exports = mongoose.model('Course',Course)