// let obj = {
//     name: 'Yoshi'
// };

// let stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// var string = '{"name":"Yoshi"}';
// let json = JSON.parse(string);
// console.log(typeof json);
// console.log(json);

const fs = require('fs');

let Note = {
    title: "a title",
    body: 'a body'
}

let noteOriginalString = JSON.stringify(Note)

fs.writeFileSync('notes.json', noteOriginalString)

let noteString = fs.readFileSync('notes.json');

let noteObj = JSON.parse(noteString);

console.log(typeof noteObj);
console.log(noteObj.title);
