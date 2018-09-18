var faker = require('faker');
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'dlardizabal',
    database: 'join_us'
});

var q = 'SELECT CURDATE() AS DATA';
connection.query(q, function(err, res, fields) {
    if(err) throw err;
    console.log(res[0].DATA);
});

connection.end();

var newUser = {
    email: faker.internet.email(),
    pastDate: faker.date.past(),
    seperator: '============================'
};

for(var i = 0; i < 3; i++) {
    console.log(newUser.seperator);
    console.log(newUser.email);
    console.log(newUser.pastDate);
}


