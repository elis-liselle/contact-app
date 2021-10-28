const express = require("express");
const myRouter = express.Router();

myRouter.get("*", (req, res) => {
  res.send("404 not found");
});

module.exports = myRouter;
