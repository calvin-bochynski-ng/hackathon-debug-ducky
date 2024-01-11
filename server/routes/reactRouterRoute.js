const express = require("express");
const router = express.Router();
const fs = require("fs");

const readReactRouterMethod = () => {
  const data = fs.readFileSync("./data/reactRouter.json");
  return JSON.parse(data);
};

router.get("/:name", (req, res) => {
  const methods = readReactRouterMethod();
  const { name } = req.params;

  const foundMethod = methods.find((method) => method.method === name);
  res.json(foundMethod);
});

module.exports = router;
