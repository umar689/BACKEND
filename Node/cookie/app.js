const express=require('express');
const app=express();
const cookieParser = require('cookie-parser');

app.use(cookieParser());

app.get('/',function(req,res){
    res.send('hello')
})

app.get('/check',function(req,res){
    console.log(req.cookies.banned);
    console.log(req.cookies.name);
    res.send('check logs')
})

app.get('/banned',function(req,res){
    res.cookie('banned','true');
    res.cookie('name','umar');
    res.send('banned');
})

 
app.listen(3006,function(){
    console.log('server is live at port 3006')
})