const mongoose = require("mongoose");
const express=require('express');
const app=express();
const debug=require('debug')('app')

mongoose.connect(
  "mongodb+srv://uk0117362_db_user:GSt4N4tW98jRJ2A1@cluster0.l2yopxh.mongodb.net/?appName=Cluster0"
)
.then(() => {
  debug("MongoDB Atlas Connected");
})
.catch((err) => {
  debug(err);
});

app.get('/',function(req,res){
    res.send('hello')
})

app.listen(8000);
