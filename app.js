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
    let note = notes.addNote(argv.title, argv.body);
    if(note){
        console.log(`Note created!!!`);
        console.log(`----------`);
        console.log(`Title: ${note.title}`);
        console.log(`Body: ${note.body}`);
        console.log(`----------`);
    }else{
        console.log(`A note of with this title already exists.`);
        console.log(`Please create a note with a new title.`);
    }
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
