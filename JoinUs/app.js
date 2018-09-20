var express = require('express');
var faker = require('faker');
var mysql = require('mysql');
var app = express();

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
        res.send(`We have ${count} users in our db`);
    });
});

app.listen(8080, function() {
    console.log('===========================');
    console.log('App Listening on port 8080!');
    console.log('===========================');
});