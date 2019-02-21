//! creating 2 same documents
const mongoose = require("mongoose");

// mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://localhost:27017/TodoApp`);

// let Todo = mongoose.model("Todo", {
//   text: {
//     type: String,
//     required: true,
//     minlength: 1,
//     trim: true
//   },
//   completed: {
//     type: Boolean,
//     default: false
//   },
//   completedAt: {
//     type: Number,
//     default: null
//   }
// });

// let newTodo = new Todo({
//   text: "23   "
// });

// newTodo
//   .save()
//   .then(doc => {
//     console.log("Save todo", doc);
//   })
//   .catch(e => {
//     console.log("error", e);
//   });

//* User

let User = mongoose.model("user", {
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
  }
});

let newUser = new User({
  email: "tranceyos2419@gmail.com"
});

newUser
  .save()
  .then(doc => {
    console.log("Saved User", doc);
  })
  .catch(e => {
    console.log("error ", e);
  });
