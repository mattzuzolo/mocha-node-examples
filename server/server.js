const express = require("express");

var app = express();

app.get("/", (request, response) => {
  response.send("Hello world!!!")
  //specify status code: response.status(200).send("Hello World!!!")
});

app.get("/users", (request, response) => {
  response.send([{
    name: "matt",
    age: 24,
  }, {
    name: "matt2", age: 100,
  }]);
});

app.listen(3000);
module.exports.app = app;
