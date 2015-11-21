'use strict';

var  express = require('express'),
     bodyParser = require('body-parser'),
     cookieParser = require('cookie-parser'),
     route = require('./route');



var app = express();
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/user', route);
app.get('/',function(req,res){
    res.end("ddd");
});
app.listen(9408, function () {
    console.log('* running, port:', 9408);
    console.log('* app env:', app.get('env'));
});
module.exports = app;