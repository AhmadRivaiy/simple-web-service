var app = require('./app.js');

var server = app.listen(7777, function () {
    var port = server.address().port;
    console.log('Web App Hosted at http://localhost:%s',port);
});
