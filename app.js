console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');

const notes = require('./notes.js');

let command = process.argv[2];
console.log(`command: ${command}`);

if(command === 'add'){
    console.log(`Adding new note`);
}else if(command === 'list'){
    console.log(`Listing all notes`);
}else if(command === 'read'){
    console.log(`Read a specific note`);
}else if(command === 'remove'){
    console.log(`Removing this note...`);
}
else{
    console.log(`Command not recognized`);
}
