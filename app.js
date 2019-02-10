const express = require("express");

const app = express();

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.send("<h1>Hello Express</h1>");
});

app.get("/json", (req, res) => {
  res.send({
    name: "Yoshi",
    links: ["cat", "dog"]
  });
});

app.get("/bad", (req, res) => {
  res.send({
    message: "Something went wrong"
  });
});

app.listen(3001, console.log("listing 3001"));
