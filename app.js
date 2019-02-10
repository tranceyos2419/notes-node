const express = require("express");

const app = express();

app.set("view engine", "hbs");
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.render("home.hbs", {
    pageTitle: "Home page",
    currentYear: new Date().getFullYear(),
    welcome: "Welcome to my page"
  });
});

app.get("/hello", (req, res) => {
  res.send("<h1>Hello Express</h1>");
});

app.get("/about", (req, res) => {
  res.render("about.hbs", {
    pageTitle: "About page",
    currentYear: new Date().getFullYear()
  });
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
