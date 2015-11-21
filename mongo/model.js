'use strict';
var  mongoose = require('mongoose'),
     schema = require('./schema.js');

var  db = mongoose.createConnection('mongodb://127.0.0.1:27017');
     db.on('error',function(e){
        console.dir(e);
     });

//mongoose.model(name, schema.userSchema)
var userModel = db.model('mongoose',schema.userSchema);

exports.insertUser = function(data,callback){
   
   var doc = data || { username : 'xzy', password:"123" };
   userModel.create(doc, function(error){
	    if(error) {
	        callback(error,{});
	    } else {
	        callback(null,{result:'ok'});
	    }
	});
}

exports.verifytUser = function(data,callback){
   
   var doc = data;
   userModel.findOne({'username':data.username,'password':data.password},function(err,doc){

   	callback(err,doc);

   });
}
