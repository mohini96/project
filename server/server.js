var express=require('express');
var bodyParser=require('body-parser');
var passport=require('passport');

var router=require('./router/route')
var mongoose=require('./db/db');

var app=express();
global.token='';

app.use(passport.initialize());
app.use(bodyParser.json());

router.route(app);

app.listen(3000,()=>{
    console.log("Connected to 3000")
})