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
//app.use mai jo bhoi likha jata hai vo middle ware hota h . koi bhi route chal nai sai pehle ye middle ware chalen gai . agar inn mai next() use nhi kia to aage ka kaam nai hoga aur code whi stuck ho jaaye ga

//para by : Alt + z

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