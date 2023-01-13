var express = require("express");
const { modelNames } = require("mongoose");
const mongoose = require("mongoose");
var schema = mongoose.Schema;
var router = express.Router();

// mongoose schema
var productschema = new schema({
    prodid: String,
    prodname: { type: String, trim: true, required: true },
    prodqty: String,
    prodprice: String
})

var Prod = mongoose.model('productlist', productschema, 'productlist')

//VIEW DB
// router.get("/", function (req, resp) {
//     Prod.find().exec(function (err, data) {
//         if (err) {
//             resp.status(500).send("No data found in Database");
//         } else {
//             resp.send(data);
//         }
//     })
// });
router.get("/productlist", function (req, resp) {
    Prod.find().exec(function (err, data) {
        if (err) {
            resp.status(500).send("No data found in Database");
        } else {
            resp.send(data);
        }
    })
});
//
router.get("/productlist/:prodid", function (req, resp) {
    console.log("prodid: " + req.params.prodid);
    Prod.find({ prodid: req.params.prodid }).exec(function (err, data) {
        if (err) {
            resp.status(500).send("No data found in Database");
        } else {
            resp.send(data);
        }
    })
});
//add data post
router.post("/productlist", function (req, resp) {
    var Prodob = new Prod({ prodid: req.body.prodid, prodname: req.body.prodname, prodqty: req.body.prodqty, prodprice: req.body.prodprice })
    Prodob.save(function (err, data) {
        if (err) {
            resp.status(500).send("No data Addded in Database");
        } else {
            resp.send(data);
        }
    })
});
//update retrieved id and modify in db
router.put("/productlist/:prodid", function (req, resp) {
    console.log("prodid: " + req.params.prodid);
    Prod.findprod({ prodid: req.params.prodid }, function (err, doc) {
        if (err) {
            console.log("in update if-put")
            resp.status(500).send("No data Updated in Database");
        } else {
            console.log("in update else-put")
            doc.prodid = req.body.prodid;
            doc.prodname = req.body.prodname;
            doc.prodqty = req.body.prodqty;
            doc.prodprice = req.body.prodprice;
            doc.save(function (err, data) {
                if (err) {
                    resp.status(500).send("No data Updated in Database");
                } else {
                    resp.send(data).send("Updated Succesfully!");
                }
            })
        }
    })
});
//delete by id and back to table
router.delete("/productlist/:prodid", function (req, resp) {
    Prod.remove({ prodid: req.params.prodid }, function (err, data) {
        if (err) {
            resp.status(500).send("No data deleted in Database");
        } else {
            resp.send(data).send("Deleted Succesfully!");
        }
    })
})

module.exports = router;

