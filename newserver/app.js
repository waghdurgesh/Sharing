//load deependencies
const express = require('express')
const app = express();
const sql = require('mysql')
//connection
const db = sql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456789',
    database: 'mis1'
});

db.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Connection Seccesfull!!")
    }
});

//url
app.get('/getdata/:xxx', (req, res) => {
    // let sql = `select * from trainers`
    let yyy = `select * from ${req.params.xxx};`
    db.query(yyy, (err, result)=>{
        if (err) {
            throw err;
        } else {
            // console.log(result);
            res.send(result)
        }
    });
});

app.get('/insertdata/:table/:id/:degree',(req,res)=>{
    let yyy = `insert into ${req.params.table} values (${req.params.id},"${req.params.degree}");`
    db.query(yyy,(err)=>{
        if (err) {
            throw err;
        } else {
            // console.log(result);
            res.send("updated")
        }
    });
});

//server call
app.listen(3010);
console.log("mySQL connected on 3010");

// run query on mysql
// alter user 'root'@'localhost' identified with mysql_native_password by '123456789';