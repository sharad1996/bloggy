var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/user');
var bCrypt = require('bcrypt-nodejs');

module.exports = function(passport){

  passport.use('login', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback : true
  },
    function(req, username, password, done) {
      console.log(username);
      User.findOne({ 'username' :  username },
        function(err, user) {
          if (err) {
            return done(err);
          }
          // Username does not exist,
          if (!user) {
            console.log('User Not Found with username '+username);
            return done(null, false, {message: 'User Not Found with username' });
          }
          // User exists but wrong password,
          if (!isValidPassword(user, password)) {
            console.log('Entered Invalid Password');
            return done(null, false, {message: 'Entered Invalid Password' } ); // redirect back to login page
          }
          return done(null, user, {message: 'login successful' });
        }
      );
    })
  );

  var isValidPassword = function(user, password){
    return bCrypt.compareSync(password, user.password);
  }

}
