//* start debugger by typing [ node inspect <file name> ]
//* start debugger by typing [ nodemon inspect <file name> ]
//* type n to move to next line
//* type c to move to next debugger
//* type repl to get into Reading-Eval-Print-Loop

let person = {
    name: 'Ben'
}

person.age = 25;

debugger;

person.name = `Mike`

console.log(person);
