console.log('Starting app');

const fs = require('fs');
const os = require('os');

let user = os.userInfo();
let message = `Yo ${user.username}!`;

fs.appendFile('greetings.txt', message, (err) => {
    if(err){
        console.log(`Unable to write file`);
        console.log(err);
    }
});