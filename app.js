var faker = require('faker');

var newUser = {
    email: faker.internet.email(),
    pastDate: faker.date.past(),
    seperator: '=========================='
};

for(var i = 0; i < 3; i++) {
    console.log(newUser.seperator);
    console.log(newUser.email);
    console.log(newUser.pastDate);
}


