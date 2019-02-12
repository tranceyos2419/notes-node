//! type "nodemon app.js -e js,hbs" to watch changes
const express = require("express");
const hbs = require("hbs");
const app = express();

hbs.registerPartials(__dirname + "/views/partials");
app.set("view engine", "hbs");
app.use(express.static(__dirname + "/public"));

hbs.registerHelper("getCurrentYear", () => {
  return new Date().getFullYear();
});

hbs.registerHelper("screamIt", (text01, text02) => {
  return `${text01} ${text02}`;
});

app.get("/", (req, res) => {
  res.render("home.hbs", {
    pageTitle: "Home page",
    welcome: "Welcome to my page",
    user: "Yoshi"
  });
});

app.get("/hello", (req, res) => {
  res.send("<h1>Hello Express</h1>");
});

app.get("/about", (req, res) => {
  res.render("about.hbs", {
    pageTitle: "About page"
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

app.listen(3022, console.log("listing 3022"));
