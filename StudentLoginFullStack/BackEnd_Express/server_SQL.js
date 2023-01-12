const express = require('express');
const app = express();
const mysql = require('mysql');
//create connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',  //please change username
    password: 'password', //please change password
    database: 'practice'
});
//connect
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('mysql connected');
});

// create db 
app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE practice;'
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('database created....')
    });
});

app.get('/usedatabse', (req, res) => {
    let sql = 'use practice;'
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('selected database....')
    });
});

app.get('/createtb', (req, res) => {
    let sql = 'create table auth(userid int primary key,email varchar(25),password varchar(25));'
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('database created....')
    });
});

app.get('/insertdata', (req, res) => {
    let sql = 'insert into auth values(1,"aniket@gmail.com","aniket@123");'
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('inserted data....')
    });
});
app.get('/getauthdata', (req, res) => {
    let sql = 'select * from auth;'
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('data fetched....')
    });
});
app.get('/update/:id', (req, res) => {
    let sql = `update auth set password="nikhil@123" where userid= ${req.params.id};`
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('data updated....')
    });
});

// // get empdata
// app.get('/getallemp',(req,res)=>{
//     let sql = 'SELECT * FROM empdata';
//     let query = db.query(sql,(err,results)=>{
//         if(err) throw err;
//         console.log(results);
//         res.send(results);
//     });
// });

// // get emp under boss
// app.get('/getallempundermgr/:id',(req,res)=>{
//     let sql = `select e.name,e.designation,e.gender,e.tel,l.description,s.statusdesc,an.award_name
//                 from empdata e 
//                 inner join applog l on e.userid=l.userid 
//                 inner join statab s on s.statno=l.status 
//                 inner join awardlog aw on aw.userid=e.userid
//                 inner join award an on an.award_id=aw.award_earned where e.mgrid= ${req.params.id}`;
//     let query = db.query(sql,(err,results)=>{
//         if(err) throw err;
//         console.log(results);
//         res.send(results);
//     });
// });

// // update emp description
// app.get('/updatedesc/:id/:desc',(req,res)=>{
//     let sql = `update applog set description = ${req.params.desc} where userid =${req.params.id}`;
//     let query = db.query(sql,(err,results)=>{
//         if(err) throw err;
//         console.log(results);
//         res.send(results);
//     });
// });

app.listen('3000', () => {
    console.log('server started on port 3000');
});