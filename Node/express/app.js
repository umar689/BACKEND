const express=require('express');
const app=express();

app.use(function(req,res,next){
    console.log('hey hello');
    next();
})

app.use(function(req,res,next){
    console.log('kaise ho');
    next();
})

app.get('/',function(req,res){
    res.send('welcome');
});

app.get('/aboutme',function(req,res){
    res.send('hi my self Umar Khalid<br>i am the owner of this page');
})

app.use(function(req,res){
    res.send('if nothing works i will');
})

app.listen(3002,function(){
    console.log('server is live on port 3002')
})