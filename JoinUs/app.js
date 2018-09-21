var express = require('express');
var faker = require('faker');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'dlardizabal',
    database: 'join_us'
});

app.get('/', function(req, res) {
    var q = 'SELECT COUNT(*) AS count FROM users';
    connection.query(q, function(err, results) {
        if(err) throw err;
        var count = results[0].count;
        res.render('home', {data: count});
    });
});

app.post('/signup', function(req, res) {
    var person = {
        email: req.body.email
    };
    
    connection.query('INSERT INTO users SET ?', person, function(err, result) {
        if(err) throw err;
        res.redirect("/");
    });
});

app.listen(8080, function() {
    console.log('===========================');
    console.log('App Listening on port 8080!');
    console.log('===========================');
});