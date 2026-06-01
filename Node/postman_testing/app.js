const express=require('express');
const app=express();

var arr=[1,2,3,4];

app.get('/',function(req,res){
    res.send(arr);
});

app.post('/push/:number',function(req,res,next){
    try{
        arr.push(parseInt(req.params.number));
        res.send(arr);
    }
    catch(err){
        next(err);
    }   
})

app.use(function(err,req,res,next){
    res.status(500).send(err.message)   
})

app.listen(3002,function(){
    console.log('server is live on port 3002')
})