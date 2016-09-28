var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy;

module.exports = function() {
    passport.use(
        new LocalStrategy({
            passReqToCallback: true,
            usernameField: 'email',
            passwordField: 'password'            
        },
        function(req, email, password, done){
            //Here the user pwd should check from db
            return done(null, {
                name: 'user',
                email: 'user@email.com'
            });
        })
    );

    passport.serializeUser(function(user, done) { 
        // please read the Passport documentation on how to implement this. We're now
        // just serializing the entire 'user' object. It would be more sane to serialize
        // just the unique user-id, so you can retrieve the user object from the database
        // in .deserializeUser().
        done(null, user);
    });

    passport.deserializeUser(function(user, done) { 
        // Again, read the documentation.
        done(null, user);
    });    
};