const express=require('express');
const app=express();

app.get('/',function(req,res,next){
    try{
        res.send('hey')
    }
    catch(err){
        next(err)
    }
})

app.use(function(err,req,res,next){
    res.status(500).send(err.message);
})

app.listen(8000,function(req,res){
    console.log('servewr is live at port 8000');
})