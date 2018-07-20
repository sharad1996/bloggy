var express = require('express');
var Posts = require('../models/posts');
var router = express.Router();
var passport = require('passport');
var secret = require('../secret.js');
var jwt = require('jsonwebtoken');

// uplolad post data to database
router.post('/posts' ,function(req, res) {
  console.log('upload post data');
  let token = req.body.token;
  let decoded = jwt.decode(token);
  var userId = decoded._id;
  var newPost = new Posts();

  newPost.userId = userId;
  newPost.description = req.body.description;
  newPost.status  = req.body.status;

  newPost.save(function(err,data){
    if(err){
      res.send(err);
    }
    else{
      console.log('post data submitted');
      res.send({message:"Postdata has been Inserted..!!"});
    }
  });

});

//load post data from database with public status
router.get('/posts', (req, res, next) => {
  console.log('Request Params', req.params);
  console.log('Request Params', req.query);
  console.log('Request Params', req.body);
  Posts.find({ status: "public" },function(err,data){
    if(err){
      res.send(err);
    }
    else{
      res.send(data);
      //console.log('data',data);
    }
  }).populate('user');
});

module.exports = router;