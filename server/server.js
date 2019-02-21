const mongoose = require("mongoose");

// mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://localhost:27017/TodoApp`);

let Todo = mongoose.model("Todo", {
  text: {
    type: String
  },
  completed: {
    type: Boolean
  },
  completedAt: {
    type: Number
  }
});

let newTodo = new Todo({
  text: "version downed",
  completed: true,
  completedAt: 2
});

newTodo
  .save()
  .then(doc => {
    console.log("Save todo", doc);
  })
  .catch(e => {
    console.log("error", e);
  });
