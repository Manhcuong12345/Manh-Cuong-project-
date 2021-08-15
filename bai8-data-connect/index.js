const express = require('express')
const mongoose = require('mongoose');
const router = require('./route/user')
const db = require('./database')
const app = express();

db()

// app.use('/',route)
   app.listen(2000,function(){
   console.log('Sever Post running')
})