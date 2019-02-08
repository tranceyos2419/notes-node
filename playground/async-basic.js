//* Node.js is none blocking, which means the process runs whiteout waiting

//* [Behavior ofNode API calls]
//* Call Stack -> Node APIs -> Callback Queue -> Event loop -> Call Stack

//* call backs can't be transferred to Call Stack unless Call Stack becomes empty

console.log("Start");

setTimeout(() => {
  console.log("inside");
}, 1000);

setTimeout(() => {
  console.log("second");
}, 0);

console.log("finish");
