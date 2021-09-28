const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello Jenkins!");
});

app.listen(3000, function () {
  console.log("The server start at port 3000");
});
