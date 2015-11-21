'use strict';
var  mongoose = require('mongoose');



var userSchema  = new mongoose.Schema({
    username : {type : String, default : '匿名用户'},
    password : {type : String}
});


exports.userSchema = userSchema;