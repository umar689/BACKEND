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

app.get('/create',async function(req,res){
    const user = await userModel.create({
        name: "umar",
        email: "umar@gmail.com",
        password: "123456",
        age: 22
    });
    debug('user created');
    res.send(user);

})

app.get('/read',async function(req,res){
    const user=await userModel.findOne({
        name : "u"
    })
    debug('readed');
    res.send(user);
})

app.get('/readall',async function(req,res){
    const users=await userModel.find()
    debug('readed');
    res.send(users);
})

app.get('/updateandgetold',async function(req,res){
    const user=await userModel.findOneAndUpdate({name : "u"},{name :"umar shamsi"})
    debug('updated');
    res.send(user);
})

app.get('/updateandgetnew',async function(req,res){
    const user=await userModel.findOneAndUpdate({name : "u"},{name :"umar shamsi"},{new: true})
    debug('updated');
    res.send(user);
})

app.get('/delete',async function(req,res){
    const user=await userModel.findOneAndDelete({name :"umar shamsi"})
    if(user===null) return res.send('user not found');
    debug('delete');
    res.send(user);
})

//postman routes
app.post('/create',async function(req,res){
    let{namee,emaill,passwordd,agee}=req.body;
    const user = await userModel.create({
        name:namee,
        email: emaill,
        password: passwordd,
        age: agee
    });
    debug('user created');
    res.send(user);
})

app.get('/read/:username',async function(req,res){
    const n =req.params.username;
    const user = await userModel.findOne({
        name:n
    });
    debug(user);
    res.send(user);
})

app.get('/delete/:username',async function(req,res){
    const n =req.params.username;
    const user = await userModel.findOneAndDelete({
        name:n
    });
    console.log(`${n} deleted`);
    res.send(user);
})

app.post('/update',async function(req,res){
    let {name,email,age}=req.body;
    const user =await userModel.findOneAndUpdate({name:name},{
        email : email,
        age : age
    },{new : true});
    console.log(user);
    res.send(user);
})

app.listen(8000,function(){
    console.log('server is live on port 8000')
})