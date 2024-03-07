const express = require("express");
const app = express();
const connection = require("../config/db");
const routes = require("./routes/users");

const hostname = "127.0.0.1";

const port = 3000;

app.use("/", routes);

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
