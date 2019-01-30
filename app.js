const yargs = require('yargs');
const notes = require('./notes');

var argv = yargs.argv;
var command = argv._[0];
console.log('Yargs ', argv);

console.log(command);
const { title, body } = argv;
if (command === 'add') {
    notes.addNote(title, body)
} else if (command === 'list') {
    notes.getAll()
} else if (command === 'read') {
    notes.readNote(title)
} else if (command === 'remove') {
    notes.removeNote(title)
} else {
    console.log('command is not recognized');
}
