console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');
const argv = yargs.argv;


let command = process.argv[2];
console.log(`Command: ${command}`);
console.log(`Process`, process.argv);
console.log(`Yargs`, argv);

if(command === 'add'){
    console.log(`Adding new note...`);
}else if(command === 'list'){
    notes.getAll();
}else if(command === 'read'){
    notes.getNote(`moo`);
}else if(command === 'remove'){
    notes.deleteNote(`moo`);
}
else{
    console.log(`Command not recognized...`);
}
console.log('////////////////');
console.log(process.argv);
