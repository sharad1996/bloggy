var express = require("express");
var User = require('../models/user').User;
var passport = require('passport');
var login = require('./login');
var signup = require('./signup');

module.exports = function(passport){
  //take user id for server side session login
  passport.serializeUser(function(user, done) {
    done(null, user.id)
  })
  //session logout
  passport.deserializeUser(function(id, done) {
    User.findOne({ _id: id }, function (err, user) {
      done(err, user)
    })
  })

  // use these strategies
  login(passport);
  signup(passport);
}