console.log(`Starting notes.js!!`);
const fs = require('fs');

let addNote = (title, body) => {
    let notes = []; //creates an empty array to store notes
    let note = { //defines a note
        title,
        body
    };
    
    try{
        let notesString = fs.readFileSync('notes-data.json'); //gets an existing array of notes and converts to string
        notes = JSON.parse(notesString);//redefines notes array as an array with notes that aready exist if they exist    
    }catch(e){
        
    }
    
    let duplicateNotes = notes.filter((note) => note.title === title); //single line return statement 

    if(duplicateNotes.length === 0){
        notes.push(note); //pushes a new note to array if duplicateNotes.length has no length
        fs.writeFileSync('notes-data.json', JSON.stringify(notes)); //adds notes array to the file
        console.log(`Adding note`, note.title, note.body);
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