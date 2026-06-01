const express=require('express');
const app=express();


app.get('/admin/api/testing/greet/basic',function(req,res){
    res.send('hi');
});

app.post('/admin/api/testing/greet/:adminname',function(req,res,next){
    try{
        res.send(`hello ${req.params.adminname}`);
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