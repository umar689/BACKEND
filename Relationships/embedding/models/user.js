const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  content: String,
  date: {
    type: Date,
    default: Date.now
  }
});

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  posts : [postSchema]
});
 
//"User" : model ka name
//MongoDB mai collection bane gi users k name sai
module.exports = mongoose.model("User", userSchema);