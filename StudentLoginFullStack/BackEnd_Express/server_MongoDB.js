var express = require('express');
var app = express();
var path = require("path");
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var router = require('./routes/routers');

//connection
mongoose.promise = global.promise;
const url = 'mongodb://127.0.0.1:27017/login'

mongoose.connect(url, {
    connectTimeoutMS: 2000
}, function (err, result) {
    if (err) {
        console.log(err);
    } else {
        console.log('Connection Done with MongoDB!!')
    }
})

//middleware
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
 });

app.use("/", router);

//server
app.listen(6969);
console.log("connection done 6969 !!!")

module.exports = app;