var express = require('express');
const mongoose = require('mongoose');
var router = express.Router();
var schema = mongoose.Schema;

var studentschema = new schema({
    roll_no: Number,
    name: String,
    course: String,
    birthdate: String,
    marks: Number,
    phone: Number
});

var Stud = mongoose.model('student', studentschema, 'student')

//display
router.get("/student", function (req, resp) {
    Stud.find().exec(function (err, data) {
        if (err) {
            resp.status(500).send("No Data found !!")
        } else {
            resp.send(data);
        }
    });
});

//delete
router.delete("/student/:roll_no", function (req, resp) {
    Stud.remove({ roll_no: req.params.roll_no }, function (err, data) {
        if (err) {
            resp.send(500).send("Data Not deleted! ")
        } else {
            resp.send(data)
        }
    });
});

//insert
router.post("/student", function (req, resp) {
    var sch = new Stud({
        roll_no: req.body.roll_no,
        name: req.body.name,
        course: req.body.course,
        birthdate: req.body.birthdate,
        marks: req.body.marks,
        phone: req.body.phone
    });
    sch.save(function (err, data) {
        if (err) {
            resp.status(500).send("Data Not Inserted!!");
        } else {
            resp.send(data);
        }
    });
});

module.exports = router;