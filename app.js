console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');
const argv = yargs.argv;

//let command = process.argv[2]; //using process.argv
let command = argv._[0]; //this uses lodash to get the argv variable

console.log(`Command: ${command}`);
console.log(`Process`, process.argv);
console.log(`Yargs`, argv);

if(command === 'add'){
    notes.addNote(argv.title, argv.body);
}else if(command === 'list'){
    notes.getAll();
}else if(command === 'read'){
    notes.getNote(argv.title);
}else if(command === 'remove'){
    notes.removeNote(argv.title);
}
else{
    console.log(`Command not recognized...`);
}
// console.log('////////////////');
// console.log(process.argv);
