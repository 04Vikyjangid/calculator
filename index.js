// jshint esversion : 6

var express = require("express");

var app = express();

app.get("/" , function(req, res){
    res.send("<h1>Calculator</h1>")
});


app.listen(3000, function(){
    console.log("server 3000!")
}); 