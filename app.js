console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleOptions = {
                        describe: 'Title of note',
                        demand: true,
                        alias: 't'
                    };
const bodyOptions = {
                        describe: 'Body of note',
                        demand: true,
                        alias: 'b'
                   };
                   
const argv = yargs
    .command('add', 'Add a new note', {
        title: titleOptions,
        body: bodyOptions
    })
    .command('list', 'Lists all of the notes')
    .command('read', 'Read a specific note', {title: titleOptions})
    .command('remove', 'Removes a specific note', {title: titleOptions})
    .help()
    .argv;
    
//let command = process.argv[2]; //using process.argv
let command = argv._[0]; //this uses lodash to get the argv variable

console.log(`Command: ${command}`);
console.log(`Process`, process.argv);
console.log(`Yargs`, argv);

if(command === 'add'){
    let note = notes.addNote(argv.title, argv.body);
    if(note){
        console.log(`Note created!!!`);
        notes.logNote(note);
    }else{
        console.log(`A note of with this title already exists.`);
        console.log(`Please create a note with a new title.`);
    }
    }else if(command === 'list'){
        let allNotes = notes.getAll();
        console.log(`Printing ${allNotes.length} note(s)`);
        allNotes.forEach((note) =>notes.logNote(note));
    }else if(command === 'read'){
        let note = notes.getNote(argv.title);
        if(note){
            console.log(`Note found! Please read below:`);
            notes.logNote(note);
        }else{
            console.log(`No note with the title, ${argv.title} could be found`);
        }
    }else if(command === 'remove'){
        let noteRemoved = notes.removeNote(argv.title);
        let message = noteRemoved ? `The note ${argv.title} was removed.` : `No note was removed.`;
        console.log(message);
    }
else{
    console.log(`Command not recognized...`);
}
// console.log('////////////////');
// console.log(process.argv);
