console.log('Starting app');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

let user = os.userInfo();
let greetingMessage = `Yo ${user.username}!`;
let ageMessage = `You are ${notes.age}.`;

fs.appendFile('greetings.txt', `${greetingMessage} ${ageMessage}`, (err) => {
    if(err){
        console.log(`Unable to write file`);
        console.log(err);
    }
});