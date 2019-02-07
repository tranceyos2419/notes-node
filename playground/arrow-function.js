//! user normal function when I user "arguments" or "this." in an object

var user = {
    name: 'Yoshi',
    sayHi: () => {
        console.log(arguments);
        console.log(`Hi I'm ${this.name}`);
    },
    sayHiAlt() {
        console.log(arguments);
        console.log(`Hi I'm ${this.name}`);
    }
}

// user.sayHiAlt(1, 2, 3);
// user.sayHi(1, 2, 3)
