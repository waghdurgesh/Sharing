var express = require('express');
var app = express();
var path = require("path");
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var router = require('./routes/routers');
// const cors = require('cors');
// app.use(cors);


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
app.use(express.static(path.join(__dirname, "public")));
app.use(function (req, resp, next) {
    resp.setHeader('Access-control-Allow-origin', '*');
    resp.setHeader('Access-Control-Allow-Methods', 'GET', 'POST', 'PUT', 'DELETE');
    resp.setHeader('Access-Control-Allow-Credentials', true);
    resp.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});



app.use("/", router);


//server
app.listen(6969);
console.log("connection done 6969 !!!")

module.exports = app;