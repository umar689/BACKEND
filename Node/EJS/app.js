const express=require('express');
const app=express();

//for proper working of POST form

//for supporting framework and libraries
app.use(express.json());
//for supporting normal forms
app.use(express.urlencoded({extended:true}));

app.set('view engine','ejs');
 
app.get('/',function(req,res){
    res.render('welcome');
})

app.get('/aboutme',function(req,res){
    res.render('aboutme');
})

//basics of getform
//everything visible in url
app.get('/checking',function(req,res){
    res.render('getform');
})
app.get('/checked',function(req,res){
    console.log(req.query);
    res.send('check response in logs');
})

//basics of post form
//nothing is visible in url
app.get('/create',function(req,res){
    res.render('postform');
})
app.post('/created',function(req,res){
    console.log(req.body);
    res.send('check response in logs');
})

app.listen(8000,function(){
    console.log('server is live at port 8000');
})