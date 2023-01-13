//
var express=require("express");
var app = express()
var path = require("path");
var bodyparser = require("body-parser");
var routes=require("./routes/routers")
//mongo connect
var mongoose=require("mongoose");
mongoose.promise=global.promise;
//mongo url
var url='mongodb://127.0.0.1:27017/product'
//mongo asynchronously
mongoose.connect(url,{
    connectTimeoutMS:2000
},function(err,result){
    if(err){
        console.log("Durgesh Connection with mongoDB is failed!");
        // console.log(err);
    }else{
        console.log("Durgesh Connection with mongoDB is Succesfull!");
    }
});
//middleware
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:false}));
app.use(function(req,resp,next){
    resp.setHeader('Access-control-Allow-origin','*');
    resp.setHeader('Access-Control-Allow-Methods','GET','POST','PUT','DELETE');
    resp.setHeader('Access-Control-Allow-Credentials',true);
    resp.setHeader('Access-Control-Allow-Headers','Content-Type');
    next();
});

// app.use(express.static(path.join(__dirname,"public")))
app.use("/",routes);
//start
app.listen(2090);
//for postman click here
//http://localhost:2090/productlist
console.log("Durgesh Server with mongoDB is Start at 2090! http://localhost:2090/productlist")

module.exports=app;
