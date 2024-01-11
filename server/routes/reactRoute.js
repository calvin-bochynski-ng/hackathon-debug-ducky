const express = require("express");
const router = express.Router();
const fs = require("fs");

const readReactMethod = () => {
  const data = fs.readFileSync("./data/react.json");
  return JSON.parse(data);
};

router.get("/:name", (req, res) => {
  const methods = readReactMethod();
  const { name } = req.params;

  const foundMethod = methods.find((method) => method.method === name);
  res.json(foundMethod);
});

module.exports = router;
