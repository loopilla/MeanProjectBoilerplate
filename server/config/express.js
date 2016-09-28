var express = require('express'),
    passport = require('passport'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    session = require('express-session');

module.exports = function(app, config) {
    app.set('views', config.rootPath + '/views');
    app.set('view engine', 'hbs');
//    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(session({
            secret:'verysecretkey',
            resave: false,
            saveUninitialized: false
    }));
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(express.static(config.rootPath + '/client'));
};