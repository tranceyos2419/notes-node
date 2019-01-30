var command = process.argv;

console.log(command[2]);
if (command[2] === 'read') {
    console.log('reading it');
} else if (command[2] === 'list') {
    console.log('listing it');
} else if (command[2] === 'note') {
    console.log('noting it');
} else {
    console.log('command is not recognized');
}
