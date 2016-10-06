var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname + '/webui/')));

app.get('/', function(req, res){
  res.sendFile("index.html");
});

app.listen(61003);
