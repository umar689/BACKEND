const express=require('express');
const app=express();
const morgan=require('morgan');

app.use(morgan('combined'));

app.get('/',function(req,res){
    res.send('hello ji')
})

app.listen(3007,function(){
    console.log('server is live at port : 3007')
})