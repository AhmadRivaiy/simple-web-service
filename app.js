var express = require('express');
var app = express();
var routerGetUser = require('./apis/Users');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/', routerGetUser)

app.use((req, res, next) => {
    var error = new Error('404 Not Found');
    error.status = 404;
    res.status(error.status || 500);
    res.json({
        message: error.message
    });
});

module.exports = app;