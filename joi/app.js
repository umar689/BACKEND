const express=require('express');
const app=express();
const mongooseconnection=require('./config/mongoose');
const {validateUser,userModel}=require('./models/user');
const debug = require('debug')('app');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/',function(req,res){
    console.log('hey');
})

app.post("/create", async (req, res) => {
    const error=validateUser(req.body).error;
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
    const user = await userModel.create(req.body);
    res.send(user);
});

app.listen(8000,function(){
    console.log('server is live on port 8000')
})