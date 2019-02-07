const yargs = require('yargs');
const notes = require('./notes');

var argv = yargs.argv;
console.log('Yargs ', argv);

var command = argv._[0];
console.log(command);

const { title, body } = argv;

if (command === 'add') {
    var note = notes.addNote(title, body)
    note !== undefined ? console.log('add note') : console.log('title already exist');
} else if (command === 'list') {
    let allNotes = notes.getAll()
    if (allNotes.length > 0) {
        allNotes.forEach(note => console.log(JSON.stringify(note)))
    } else {
        console.log('No notes');
    }
} else if (command === 'read') {
    const foundNote = notes.readNotes(title);
    foundNote.length > 0 ? console.log(`Found Note: ${JSON.stringify(foundNote)}`) : console.log(`Note not found`);
} else if (command === 'remove') {
    notes.removeNote(title) ? console.log(`note is removed`) : console.log(`note is not removed`);
} else if (command === 'clear') {
    notes.clearNote()
} else {
    console.log('command is not recognized');
}
