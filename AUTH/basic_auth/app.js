const express= require("express");
const app=express();
const db = require('./config/mongoose');
const userModel=require('./models/user');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const isLoggedIn=require('./middlewares/isLoggedIn');

const cookieparser=require('cookie-parser');

app.use(cookieparser());
app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.set('view engine','ejs')

app.get('/',async function(req,res){
    console.log(req.cookies.token);
    if(req.cookies.token){
        const data = jwt.verify(req.cookies.token, 'secret');
        const email=data.email;
        const user=await userModel.findOne({email})
        return res.render('root',{flag:true , username : user.name}); 
    }
    res.render('root',{flag:false ,username:null});
})

app.get('/create',function(req,res){
    res.render('index');
})

app.post('/create',function(req,res){
    let {name ,email , password ,age}=req.body;
    console.log(req.body);
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(password, salt,async function(err, hash) {
            // Store hash in your password DB.
            const user=await userModel.create({
                name,
                email,
                password:hash,
                age
            });
            const token=jwt.sign({ email: req.body.email }, 'secret');
            res.cookie('token',token);
            res.redirect('/');
        });
    });
})

app.get('/profile',isLoggedIn,async function(req,res){
    const data=await userModel.findOne({email :req.user.email})
    res.render('profile',{data});
})

app.get('/login',function(req,res){
    res.render('login')
})

app.post('/login',async function(req,res){
    const user=await userModel.findOne({email : req.body.email})
    if(user===null) return res.send('something went wrong');
    bcrypt.compare(req.body.password, user.password, function(err, result) {
        if(result==true){
            const token=jwt.sign({ email: req.body.email }, 'secret');
            res.cookie('token',token);
            res.redirect('/');
        }
        else{
            res.send('somthing is wrong 2');
        }
    });
})

app.get('/logout',function(req,res){
    if(req.cookies.token){
        res.clearCookie('token');
    }
    res.redirect('/');
})

// function isLoggedIn(req,res,next){
//     if(req.cookies.token==null){
//         console.log('user must be logged in')
//         return res.redirect('/');
//     } 
//     const data = jwt.verify(req.cookies.token, 'secret');
//     req.user=data;
//     next();
// }

app.listen(8000,()=>{
    console.log('server is live at port 8000');
})