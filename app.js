var faker = require('faker');
var mysql = require('mysql');

// CONNECTING to mysql db
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'dlardizabal',
    database: 'join_us'
});

// CREATING Queries
var q = 'SELECT COUNT(*) AS total FROM users';
connection.query(q, function(err, res, fields) {
    if(err) throw err;
    console.log(`The total number of users are: ${res[0].total}`);
});

// ENDING connection so it doesn't persist
connection.end();

// var newUser = {
//     email: faker.internet.email(),
//     pastDate: faker.date.past(),
//     seperator: '============================'
// };

// for(var i = 0; i < 3; i++) {
//     console.log(newUser.seperator);
//     console.log(newUser.email);
//     console.log(newUser.pastDate);
// }


