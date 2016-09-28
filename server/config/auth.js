//Here comes the authentication code like passport etc..
var passport = require('passport');

exports.authenticate = function(req, res, next){
    passport.authenticate('local', function(err, user, info) {
        if (err) {
            return next(err);
        }
        if (!user) {
            return res.redirect('/login');
        }
        req.logIn(user, function(err) {
            if (err) {
                return next(err);
            }
            req.session.user = user;
            return res.redirect('/' + user.alias);
        });
    })(req, res, next);
};
