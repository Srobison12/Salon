var express = require("express");
var server = express();
bodyParser = require("body-parser");
server.use(bodyParser.urlencoded({extended: true}));

server.use(express.static("./pub"));

server.listen(80, function(){
    console.log("Server now running...Port:80");
});