var express = require('express');
var User = require('../models/user');
var jwt = require('jsonwebtoken');
var router = express.Router();
var passport = require('passport');
var utils = require('../jwt');

var multer = require('multer');
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'public/images/uploads')
    },
    filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now())
    }
});
var upload = multer({storage: storage});

//post signup data
router.post('/signup' ,function(req, res) {
  console.log('signup connected')
  passport.authenticate('signup',function(err, user, info) {
    if (err) { return next(err) }
    //if user already exist
    if (!user) {
      return res.json({
        status: false,
        message: info.message
      });
    }
    return res.json({
      status: true,
      message: info.message
    });
    })(req, res);
});

//post login data
router.post('/login',function(req, res) {
  console.log('login connected');
  passport.authenticate('login',function(err, user, info) {
    if (err) { return next(err) }
    //if user already exist
    if (!user) {
      return res.json({
        status: false,
        message: info.message
      });
    }
    var token = utils.generateToken(user);
    console.log(token);
    return res.json({
      status: true,
      token: token,
      message: info.message
    });

  })(req,res);
});

router.post('/upload', upload.single, function(req, res) {
  console.log("image uploaded");
  if (!req.file) {
    console.log("No file received");
    return res.send({
      success: false
    });

  } else {
    console.log('file received');
    return res.send({
      success: true
    })
  }
})

module.exports = router;