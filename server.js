var express = require('express');
var path = require('path');
var app = express();

var rootView = path.join(__dirname + '/webui/')

app.use(express.static(path.join(__dirname + '/webui/')));

app.get('/', function(req, res){
  res.redirect("/fcc");

});

app.get('/fcc', function(req, res){
    res.sendFile("start.html", {root: rootView});
})

// app.get('/home', function(req, res){
//   res.sendFile("start.html", {root: rootView});
// })

app.listen(61003);
console.log("Noobcorner.me is now running locally:");
console.log("---------------------");
console.log("Host: localhost");
console.log("Port: 61003");
console.log("---------------------");
