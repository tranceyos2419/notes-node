const { ObjectID } = require("mongodb");
const { mongoose } = require("../server/db/mongoose");
const { Todo } = require("../server/models/todo");

let id = "5c72762cba7a8548c0114d89";

let completed = false;

if (!ObjectID.isValid(id)) {
  console.log("ID is not valid");
}

Todo.find({
  completed
}).then(todos => {
  console.log(todos);
});

Todo.findOne({
  _id: id
}).then(todo => {
  console.log(todo);
});

Todo.findById(id).then(todo => {
  console.log(todo);
});

// challenge
const User = require("../server/models/user");

User.findById("5c6e521f14f31336d7dacbae").then(user => {
  console.log(user);
});
