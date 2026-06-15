const express=require('express');
const app=express();
const cookieparser=require('cookie-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

app.use(cookieparser());
// x-www-form-urlencoded data parse karega
app.use(express.urlencoded({ extended: true }));

// JSON data parse karega
app.use(express.json());

app.get('/',function(req,res){
    //setting up cookies
    res.cookie('umar','theboss');
    res.send('hi');
})

//hashing
app.post('/encrypt',function(req,res){
    console.log(req.body);
    const myPlaintextPassword=req.body.password;
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
            res.cookie('password',hash);
            res.send(hash);
        });
    });
})

app.post('/checkpassword',function(req,res){
    const password=req.body.password;
    bcrypt.compare(password, req.cookies.password, function(err, result) {
        if(result) return res.send('user authenticated');
        res.send('unknown user');
    });
})

//JWT
app.get('/gentoken', function(req, res) {
    jwt.sign(
        { foo: 'helloworld' },
        'donttell',
        function(err, token) {
            res.cookie('token',token);
            console.log(token);
            res.send(token);
        }
    );
});

app.get('/verify', function(req, res) {
    try {
        const data = jwt.verify(req.cookies.token, 'donttell');
        res.send(data);
    } catch (err) {
        res.send('Invalid token');
    }
});

app.listen(8000,()=>{
    console.log('server is live at port 8000')
})