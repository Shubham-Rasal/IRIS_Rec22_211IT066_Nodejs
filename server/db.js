const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    maxlength:10,
    required: true,
    min:3,
  },
  email: {
    type: String,
    maxlength:20,
    required: true,
    min:10,

  },
  password: {
    type: String,
    max:255,
    required: true,
    min:6,

  },
  date: {
    type:Date,
    default:Date.now(),


  }

});

module.exports = mongoose.model("User",UserSchema);