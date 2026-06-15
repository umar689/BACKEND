const express=require('express');
const app=express();
const debug=require('debug')('app');
const connectDB = require("./config/mongoose");
const userModel=require('./models/user');
const arr=require('./utils/users');

connectDB();

app.get('/',function(req,ees){
    res.send('welcome');
})

app.get('/createmany',async function(req,res){
    const users=await userModel.insertMany(arr);
    res.send(users);
})

//using operators + regex
app.get('/show',async function(req,res){
    const user=await userModel.find({$and : [{name : /^u.*d$/i },{age : {$gt : 20}}]});
    res.send(user);
})
 
app.listen(3000,function(){
    console.log('server is live at port 3000')
})