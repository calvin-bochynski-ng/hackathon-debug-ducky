require("dotenv").config();

const express = require("express");
const cors = require("cors");
const fs = require("fs");
const app = express();
const SERVER_PORT = process.env.PORT;
const SERVER_API_URL = process.env.API_URL;

const arrayMethod = require("./routes/arrayRoute");
const reactMethod = require("./routes/reactRoute");
const reactRouterMethod = require("./routes/reactRouterRoute");
const nodeMethod = require("./routes/nodeRoute");
const messageMethod = require("./routes/randomRoute");

app.use(express.json());
app.use(cors());

app.use("/array", arrayMethod);
app.use("/react", reactMethod);
app.use("/react-router", reactRouterMethod);
app.use("/node", nodeMethod);
app.use("/random-message", messageMethod);

const readCheatSheet = () => {
  const data = fs.readFileSync("./data/cheatsheet.json");
  return JSON.parse(data);
};

app.get("/", (req, res) => {
  const cheatSheet = readCheatSheet();
  res.json(cheatSheet);
});

app.listen(
  SERVER_PORT,
  console.log(`Server has been started at ${SERVER_API_URL}:${SERVER_PORT}`)
);
