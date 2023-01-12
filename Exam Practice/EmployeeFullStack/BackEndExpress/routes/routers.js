var express = require("express");
var mongoose = require("mongoose");

 var schema=mongoose.Schema;
 var router=express.Router();

 // design model using mongoose schema

 var empschema = new schema({
    empid:String,
    ename:{type:String,trim:true,required:true},
    sal:String
 })

 // retrive data from emptab collection and its schema
 // is defined  using empschema
// model(name,schema object,collection name)
//collection nam eis optional if model name and collecton name is same

var Emp=mongoose.model('emptab',empschema,'emptab')
// to retrive all records from mongodb and display it into browser


router.get("/employee",function(req,resp){
    Emp.find().exec(function(err,data){
        if(err){
            resp.status(500).send("no data found");
        }
        else{
            console.log(data);
            // render function will search index.jade
           // resp.render("index",{title:"Employee Data",empdata:data})
           //we are sending data in json
           resp.send(data);
        }
  
    })
});

// to get single emp data
// read one employee object
router.get("/employee/:empid",function(req,resp){
    Emp.find({empid:req.params.empid}).exec(function(err,data){
        if(err){
            resp.status(500).send("no data found");
        }
        else{
            console.log(data);
            // render function will search index.jade
           // resp.render("index",{title:"Employee Data",empdata:data})
           //we are sending data in json
           resp.send(data);
        }
  
    })
});


// to accept data in form and add data in database

// router.get("/create",function(req,resp){
//     resp.render('create',{title:'Add employee'});
// })

router.post("/employee",function(req,resp){
    var emp = new Emp({empid:req.body.empid,ename:req.body.ename,sal:req.body.sal})
    emp.save(function(err,data){
        if(err){
            resp.status(500).send({message: "no data added"});
        }

        //resp.redirect("/")
        resp.send(data);
    });
});

// router.get("/edit/:empid",function(req,resp){
//     Emp.findOne({empid:req.params.empid},function(err,doc){
//         if(err){
//             resp.status(500).send("no data updated");
//         }
//         resp.render('update',{title:'Update detailss',empob:doc})

//     })
// })

// post replaced by put 
router.put("/employee/:empid",function(req,resp){
    Emp.findOne({empid:req.body.empid},function(err,doc){
        if(err){
            resp.status(500).send("no data updated");
        }
        else{
        doc.empid=req.body.empid;
        doc.ename=req.body.ename;
        doc.sal=req.body.sal;
        doc.save(function(err,data){
            if(err){
                console.log(err);
                resp.status(500).send({message:"no data updated"});
            }
          //  resp.redirect("/")
          resp.send(data);
        })
    }
    })

});


// get replaced by delete
router.delete("/employee/:empid",function(req,resp){
    Emp.remove({empid:req.params.empid},function(err){
        if(err){
            resp.status(500).send({mag:"no data deleted"});
        }
        //it will go to the browser and immediately come back to server
        //with new url  /
       // resp.redirect("/")
       console.log("data deleted");
       resp.status(200).send({mag:"data deleted sucessfully"});
    });
});
 module.exports=router;