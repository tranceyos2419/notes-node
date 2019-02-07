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
    notes.getAll()
} else if (command === 'read') {
    notes.readNotes(title)
} else if (command === 'remove') {
    notes.removeNote(title)
} else if (command === 'clear') {
    notes.clearNote()
} else {
    console.log('command is not recognized');
}
