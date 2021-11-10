var express = require('express');
var app = express();
var routerGetUser = require('./apis/Users');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/', routerGetUser)

module.exports = app;