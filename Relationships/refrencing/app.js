const express=require('express');
const app=express();
const mongooseconnection=require('./config/mongoose');
const userModel=require('./models/user');
const postModel=require('./models/posts');
const debug = require('debug')('app');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/',function(req,res){
    res.send('hey');
})

app.post('/create',async function(req,res){
    const user=await userModel.create(req.body);
    res.send(user);
})

app.post('/:username/create/post',async function(req,res){
    const user=await userModel.findOne({
        name :req.params.username
    });
    const post=await postModel.create(req.body);
    console.log(user);
    console.log(post);
    post.user=user._id;
    user.post.push(post._id);
    await user.save();
    await post.save();
    res.send({
        user,post
    })
})
 
//population
app.get('/posts',async function(req,res){
    const posts = await postModel.find().populate("user");
    res.send(posts);
})

app.get('/user',async function(req,res){
    const posts = await userModel.find().populate("post");
    res.send(posts);
})

app.listen(8000,function(){
    console.log('server is live on port 8000')
})