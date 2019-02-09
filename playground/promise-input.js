var asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === "number" && typeof b === "number") {
        resolve(a + b);
      } else {
        reject(`variables should be number`);
      }
    }, 1500);
  });
};

asyncAdd(2, 3).then(
  sum => {
    console.log(`sum: `, sum);
  },
  errorMessage => {
    console.log(`Error: ${errorMessage}`);
  }
);
