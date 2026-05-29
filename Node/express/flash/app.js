const express=require('express');
const app=express();
const expressSession=require('express-session');
const flash=require('connect-flash');

app.use(expressSession({
    secret: 'i am umar',
    resave: false,
    saveUninitialized: false,
}));

app.use(flash());

app.get('/',function(req,res){
    res.send('ola')
})

app.get('/login',function(req,res){
    req.flash('err','invalid credentials')
    req.flash('errH','password ya username galat h')
    res.redirect('/error');
})

app.get('/error',function(req,res){
    var err=req.flash('err')
    var errH=req.flash('errH')
    res.send(`error in engilsh : ${err}<br>
        error in hindi : ${errH}`)
})

app.use(function(req,res){
    res.send("if nothing work , i'll")
})

app.listen(3004,function(){
    console.log('server is live at port 3004')
})