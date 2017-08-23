console.log('Starting app');

const fs = require('fs');

fs.appendFile('greeting.txt', 'Yo world!', (err) => {
    if(err){
        console.log(`Unable to write file`);
        console.log(err);
    }
});