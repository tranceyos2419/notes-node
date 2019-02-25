const express = require("express");
const bodyParser = require("body-parser");
const { ObjectID } = require("mongodb");

const { mongoose } = require("./db/mongoose");
const { Todo } = require("./models/todo");
const { User } = require("./models/user");

const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("you got it");
});

app.post("/todos", (req, res) => {
  let todo = new Todo({
    text: req.body.text,
    completed: req.body.completed,
    completedAt: req.body.completedAt
  });
  todo
    .save()
    .then(doc => {
      res.send(doc);
    })
    .catch(e => {
      res.status(400).send(e);
    });
});

app.get("/todos", (req, res) => {
  Todo.find()
    .then(todos => {
      res.send({ todos });
    })
    .catch(e => console.log(e));
});

app.get("/todos/:id", (req, res) => {
  const { id } = req.params;
  if (!ObjectID.isValid(id)) {
    res.status(404).send("id is invalid");
  }
  Todo.findById(id)
    .then(todo => {
      if (!todo) {
        res.status(404).send("todo is not found");
      }
      res.status(200).send(todo);
    })
    .catch(e => {
      res.status(400).send(e);
    });
});

app.listen(3123, () => {
  console.log("express is listening at the port: 3123");
});

module.exports = { app };
