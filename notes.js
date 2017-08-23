console.log(`Starting notes.js!!`);

let addNote = (title, body) => {
    console.log(`Adding note`, title, body);
};

let getAll = () => {
    console.log(`Getting all notes...`);
};

let getNote = (title) => {
    console.log(`Getting note named ${title}`);  
};

let deleteNote = (title) => {
    console.log(`Deleting note named ${title}`);
};

module.exports =  {
    addNote,
    getAll,
    getNote,
    deleteNote
};