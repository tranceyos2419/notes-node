const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(404).send({ error: "Page not found" });
  //   res.send("hello");
});

app.get("/user", (req, res) => {
  res.send([
    {
      name: "Yoshi",
      age: 23
    },
    {
      name: "Jill",
      age: 24
    }
  ]);
});

app.listen(3011, console.log(`listing 3011`));

module.exports.app = app;
