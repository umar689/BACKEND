const express=require('express');
const app=express();
const cors=require('cors');

// app.use(cors());
//cors enabling for all routes

app.get('/',cors(),function(req,res){
    res.send('hello')
})
//cors enabling for particular route
 
app.listen(3005,function(){
    console.log('server is live at port 3005')
})