const mongoose = require('mongoose');
const schemaDef = new mongoose.Schema(
   {
       id:Number,
       fullName:String,
       age:Number
   }
);


module.exports = mongoose.model("Student",schemaDef) //exporter un model User avec son shema 