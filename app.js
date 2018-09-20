var faker = require('faker');
var mysql = require('mysql');

// CONNECTING to mysql db
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'dlardizabal',
    database: 'join_us'
});

// SELECTING DATA
// var q = 'SELECT COUNT(*) AS total FROM users';
// connection.query(q, function(err, res, fields) {
//     if(err) throw err;
//     console.log(`The total number of users are: ${res[0].total}`);
// });

// INSERTING DATA v1 (HARD CODING single user)
// var q = 'INSERT INTO users (email) VALUES ("rusty_the_dog@gmail.com")';
// connection.query(q, function(err, res, fields) {
//     if(err) throw err;
//     console.log(`The total number of users are: ${res[0].total}`);
// });

// INSERTING DATA v2 (ONE QUERY AT A TIME)
// for(var i = 0; i < 500; i++) {
//     var person = {
//         email: faker.internet.email(),
//         created_at: faker.date.past()
//     };
//     connection.query('INSERT INTO users SET ?', person, function(err, res) {
//         if(err) throw err;
//         console.log(res);
//     });    
// }

// INSERTING DATA v3 (BULK INSERT)
var data = [];
for(var i = 0; i < 500; i++){
    data.push([
        faker.internet.email(),
        faker.date.past()
    ]);
}
 
var q = 'INSERT INTO users (email, created_at) VALUES ?';
 
connection.query(q, [data], function(err, result) {
    console.log(err);
    console.log(result);
});
 


// ENDING connection so it doesn't persist
connection.end();


