const express = require("express");

const app = express();

const data = [
  {
    id: 1,
    name: "John Doe",
    age: 32,
  },
  {
    id: 2,
    name: "Jane Doe",
    age: 30,
  },
  {
    id: 3,
    name: "John Smith",
    age: 25,
  },
];

app.get("/api/users", (req, res) => {
  res.json(data);
});

app.get("/api/users/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  const user = data.find((user) => {
    if (user.id == id) {
      return user;
    }
  });
  console.log(user);
  res.end();
});
