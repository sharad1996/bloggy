var jwt = require('jsonwebtoken');
var secret = require('./secret.js');

function generateToken(user) {
  var user = {
    _id: user._id.toString(),
  };

  return token = jwt.sign(user, secret, {
    expiresIn: 60 * 60 * 24 // expires in 24 hours
  });
}

module.exports = {
  generateToken: generateToken
}