const express=require('express');
const app=express();


app.get('/',function(req,res){
    res.send('hello ji')
})

//dynamic routing
app.get('/:username/:DOB1/:DOB2/:DOB3',function(req,res){
    res.send(`Hi ${req.params.username} your DOB is ${req.params.DOB1}/${req.params.DOB2}/${req.params.DOB3}`)
})

app.listen(3008,function(){
    console.log('server is live at port : 3008')
})