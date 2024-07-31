const mongoose = require('mongoose')

const signUpTemplate = new mongoose.Schema({
  fullName: {
    type:String,
    required:true
  },
  email:{
    type:String,
    required:false
  },
  phoneNumber:{
    type:String,
    required:false
  },
  description:{
    type:String,
    required:true
  },
  date:{
    type:Date,
    default:Date.now
  }

})

module.exports = mongoose.model('myTailorTable', signUpTemplate)