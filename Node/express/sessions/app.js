const express=require('express');
const app=express();
const expressSession = require('express-session');
 
app.use(expressSession({
    secret: 'i am umar',
    resave: false,// Agar session data me koi change nahi hua hai,
    // to session ko dobara save/store nahi karega.
    // Isse unnecessary database/store operations bach jati hain.
    //agar doosre route prr jaao gai aur koi change nhi h to session dobara save nhi hoga
    saveUninitialized: false, // to make sure agar koi user bina login kre aaya hai to uss ki info save nhi hogi 
}))

app.get('/create',function(req,res){
    req.session.a=true;
    res.send('session created');
})


app.get('/info',function(req,res){
    console.log(req.session.a);
    res.send('agar server restart kia to session reset ho jaaye ga aur session variables ki value undefined ho jaaye gi');
})

app.get('/',function(req,res){
    res.send('hello world')
})

app.listen(3003,function(){
    console.log('server is live at port 3003');
})