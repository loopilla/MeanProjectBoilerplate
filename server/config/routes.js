var auth = require('./auth');

module.exports = function(app) {
    app.post('/login', auth.authenticate);

    app.post('/logout', function (req, res){
        req.logout();
        res.end();
    });
    
    app.get('*', function(req, res){
        res.render('index', {
            bootstrappedUser: req.user
        });
    });
};