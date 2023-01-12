var express = require("express");
var app = express();
var bodyparser = require("body-parser");
var path = require("path");
var routes = require("./routes/routers");
/*to connect to moogobd*/
var mongoose = require("mongoose");
// to assign nodejs promise object to moongpse promise object
mongoose.promise = global.promise;

const url = 'mongodb://127.0.0.1:27017/newemp';

mongoose.connect(url, {
   // useMongoClient:true,
   connectTimeoutMs: 1000
}, function (err, result) {
   if (err) {
      // console.log(err);
      console.log("error occured connecting mongodb")
   }
   else {
      // console.log(result);
      console.log("connection sucessfull");
   }
});
// define middlewares
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: false }))
app.use(function (req, res, next) {

   res.setHeader('Access-Control-Allow-Origin', '*');
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
   res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
   res.setHeader('Access-Control-Allow-Credentials', true);
   next();

});
app.use(express.static(path.join(__dirname,"public")))
//define all routes

app.use("/", routes);

// start the server
app.listen(4000);
console.log("server started at port 4000");
module.exports = app;