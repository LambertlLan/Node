var express = require('express');
var app = express();
var session = require('express-session');
var db = require('mongodb');

app.set("view engine","ejs");
app.use(session({
    secret:'keyboard cat',
    resave:false,
    saveUninitialized:true
}))
app.get('/denglu',function (req,res) {
    
})
