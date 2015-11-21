 var express = require('express'),

     model = require('./mongo/model');

 var router = express.Router();

 router.post('/insert',function(req,res){

 	var data = {
 		username:req.body.username,
 		password:req.body.password
 	};

 	model.insertUser(data,,function(err,result){

 			err? res.status(403).end():res.send(result);

 	});

 });
 router.get('/user',function(req,res){

 	var data = {
 		username:req.query.username,
 		password:req.query.password
 	};
 
 	model.verifytUser(data,function(err,result){

 			err? res.status(403).end():res.send(result);

 	});

 });
module.exports = router;