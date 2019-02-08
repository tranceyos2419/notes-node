var getUser = (id, callback) => {
  let user = {
    id: id,
    name: "yoshi",
    age: 23
  };

  setTimeout(() => {
    callback(user);
  }, 1000);
};

getUser(21, userObject => {
  console.log(userObject);
});
