var express = require('express');
var path = require('path');
var logger = require('morgan');
var port = 8080;
// var cookieParser = require('cookie-parser');
// var bodyParser = require('body-parser');
var app = express();
// app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname));

app.get('/test', function(req, res) {
    res.send("working");
})

app.use('/test', express.static(__dirname + '/dist'));
app.use('/test2', express.static(__dirname + '/dist'));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname,'/dist/index.html'));
});



app.listen(port, function() {
    console.log("listening on port: " + port);
  });
