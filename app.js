const fs = require('fs');
const os = require('os');
const notes = require('./notes')

// fs.appendFileSync('hello.txt', `Hello ${os.userInfo().username}`);
// console.log(notes.age);

console.log(notes.addNote());
