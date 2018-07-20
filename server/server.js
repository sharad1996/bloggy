var express = require("express");
var mongo = require("mongoose");
var passport = require('passport');
var bodyParser = require('body-parser');
var expressSession = require('express-session');
var cookieParser = require('cookie-parser');
var cors = require('cors');
var jwt = require('jsonwebtoken');
var db = require('./config.js')
var app = express();
var port = process.env.PORT || 3008;
var User = require('./models/user');
var Post = require('./models/posts');

app.use(cors());
app.use(cookieParser());
app.use(expressSession({secret:'secretData'}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  console.log('welcome to blog application');
  next();
});

app.options('*', cors());
//cors handling
app.all('/*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");

  next();

});

//passpot initialize
app.use(passport.initialize());
app.use(passport.session());
//passport logic call
var initPassport = require('./passport/passport')(passport);

//api use by user to call server
app.use('/api', require('./routes/users'));
app.use('/api', require('./routes/posts'));

app.listen(port);
console.log('Connected with port ' + port);

module.exports=app;