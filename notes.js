console.log(`Starting notes.js!!`);
const fs = require('fs');

let addNote = (title, body) => {
    let note = {title: title, body: body};
    let noteString = JSON.stringify(note);
    fs.writeFileSync('notes.json', noteString);
    console.log(`Adding note`, title, body);
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