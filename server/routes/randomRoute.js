const express = require("express");
const router = express.Router();
const fs = require("fs");

const readArrayMethod = () => {
  const data = fs.readFileSync("./data/encouraging-msg.json");
  return JSON.parse(data);
};

router.get("/", (req, res) => {
  const messages = readArrayMethod();
  const index = Math.floor(Math.random() * messages.length);

  res.json(messages[index]);
});

module.exports = router;
