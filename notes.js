console.log(`Starting notes.js!!`);
const fs = require('fs');

let addNote = (title, body) => {
    let notes = []; //creates an empty array to store notes
    let note = { //defines a note
        title,
        body
    };
    
    let notesString = fs.readFileSync('notes-data.json'); //gets an existing array of notes and converts to string
    notes = JSON.parse(notesString);//redefines notes array as an array with notes that aready exist if they exist
    
    notes.push(note);//pushes new note to array
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
    console.log(`Adding note`, note.title, note.body);
};

let getAll = () => {
    console.log(`Getting all notes...`);
};

let getNote = (title) => {
    console.log(`Getting note named ${title}`);  
};

let removeNote = (title) => {
    console.log(`Removing note named ${title}`);
};

module.exports =  {
    addNote,
    getAll,
    getNote,
    removeNote
};