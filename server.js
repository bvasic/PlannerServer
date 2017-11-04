var express = require('express');
var server = express();
var bodyParser = require('body-parser');
var port = process.env.port || 1000;
var jsonfile = require('jsonfile');
var filesave = require('fs');
var file = './data/data.json';

jsonfile.readFile(file, function(err,obj){
    console.log(obj);
});

server.use(bodyParser.json());
server.post("/",function(req,res){
        var jsonRequest = req.body;
        jsonfile.writeFile(file,JSON.stringify(jsonRequest.person));
});

server.get("/",function(req,res){
    res.send('GET request to the homepage')    
});

server.listen(port, function(){
    console.log("Server running on port "+port);
});