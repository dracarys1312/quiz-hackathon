'use strict';

// Khoi tao
var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');
var config = require('config');

//Cau hinh
app.use(express.static(__dirname + '/client'));
app.use(require('./apis'));

app.route('/*')
    .get((req, res) => {
      res.sendFile(path.join(__dirname, '/client/index.html'));
    });

// start server
var server = app.listen(config.get('server.port'), config.get('server.host'), function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Server started at port 3000!");
});
