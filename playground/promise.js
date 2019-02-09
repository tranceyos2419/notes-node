var somePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("Promise is resolved");
    reject("Promise is rejected");
  }, 1000);
});

somePromise.then(
  message => {
    console.log(`Success: ${message}`);
  },
  errorMessage => {
    console.log(`Error: ${errorMessage}`);
  }
);
