const fs = require('fs');


const addNote = (title, body) => {
    let notes = []
    let note = { title, body };
    try {
        let str = fs.readFileSync('./notes-data.json');
        notes = JSON.parse(str)
        // console.log(notes);
    } catch (e) {
    }

    let checkDuplication = notes.filter(note => note.title === title)
    console.log(checkDuplication);
    if (checkDuplication.length === 0) {
        notes.push(note);
        fs.writeFileSync('notes-data.json', JSON.stringify(notes))
    } else {
        console.log('not saved');
    }
}

const getAll = () => {
    console.log('Get All');
}

const readNote = (title) => {
    console.log(`Reading ${title}`);
}

const removeNote = title => {
    console.log(`remove ${title}`);
}

module.exports = {
    // addNote: addNote (this is identical to just addNote in ES6 syntax)
    addNote,
    getAll,
    readNote,
    removeNote
}
