const express = require("express");
const router = express.Router();
const fs = require("fs");

const readNodeMethod = () => {
  const data = fs.readFileSync("./data/node.json");
  return JSON.parse(data);
};

router.get("/:name", (req, res) => {
  const methods = readNodeMethod();
  const { name } = req.params;

  const foundMethod = methods.find((method) => method.method === name);
  res.json(foundMethod);
});

module.exports = router;
