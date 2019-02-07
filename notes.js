const fs = require('fs');

const readNote = () => {
    try {
        let str = fs.readFileSync('./notes-data.json');
        notes = JSON.parse(str)
        return notes;
    } catch (e) {
        return [];
    }
}

const saveNote = notes => fs.writeFileSync('notes-data.json', JSON.stringify(notes));

const addNote = (title, body) => {
    let notes = readNote()
    let note = { title, body };

    let checkDuplication = notes.filter(note => note.title === title)
    if (checkDuplication.length === 0) {
        notes.push(note);
        saveNote(notes)
        return note;
    }
}

const getAll = () => {
    console.log('Get All');
}

const readNotes = (title) => {
    console.log(`Reading ${title}`);
}

const removeNote = title => {
    console.log(`remove ${title}`);
}

const clearNote = () => {
    fs.writeFileSync('notes-data.json', '')
}
module.exports = {
    // addNote: addNote (this is identical to just addNote in ES6 syntax)
    addNote,
    getAll,
    readNotes,
    removeNote,
    clearNote
}
