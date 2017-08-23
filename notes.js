console.log(`Starting notes.js!!`);
const fs = require('fs');

let fetchNotes = () => {
    try{
        let notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    }catch(e){
        return [];
    }
};
 
let saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));//adds notes array to the file
};

let addNote = (title, body) => {
    let notes = fetchNotes(); //calls a function that creates an array of either existing notes or an empty array
    let note = { //defines a note
        title,
        body
    };
    
    let duplicateNotes = notes.filter((note) => note.title === title); //single line return statement 

    if(duplicateNotes.length === 0){
        notes.push(note); //pushes a new note to array if duplicateNotes.length has no length
        saveNotes(notes); //adds note array to the file
        console.log(`Adding note:`, note.title, note.body);
    }else{
        console.log(`A note with the title of: ${note.title} already exists.`);
        console.log(`Please create a new note.`);
    }
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