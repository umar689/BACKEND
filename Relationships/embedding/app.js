const express=require('express');
const app=express();
const mongooseconnection=require('./config/mongoose');
const userModel=require('./models/user');
const debug = require('debug')('app');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/',function(req,res){
    console.log('hey');
})

app.post('/create',async function(req,res){
    const user=await userModel.create(req.body);
    res.send(user);
})

app.post('/:username/create/post',async function(req,res){
    const user=await userModel.findOne({
        name :req.params.username
    });
    user.posts.push({
        content : req.body.data
    })
    //post tb tk add nhi hogi DB mai jb tk save nhi kro gai
    user.save();
    console.log(user);
})

app.listen(8000,function(){
    console.log('server is live on port 8000')
})