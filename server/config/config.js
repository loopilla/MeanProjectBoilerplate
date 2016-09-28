var path = require('path');
var rootPath = path.normalize(__dirname + '/../');

module.exports = {
    development: {
        rootPath: rootPath,
        db: 'mongodb://localhost/mydb',
        port: process.env.PORT || 3000
    },
    production: {}
};