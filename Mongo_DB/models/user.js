const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type :String,
    required :true
  },
  email: String,
  age: Number,
  password: String
});
 
//"User" : model ka name
//MongoDB mai collection bane gi users k name sai
module.exports = mongoose.model("User", userSchema);