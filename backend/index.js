const express = require("express");
const app = express();
require("dotenv").config();

const cors = require("cors");
const routes = require("./src/routes/users");
const router = express.Router();
const hostname = "127.0.0.1";

const port = process.env.PORT;

// Enable CORS for all routes
router.use(cors());

// Parse JSON bodies for POST requests
router.use(express.json());

// Parse URL-encoded bodies for POST requests
router.use(express.urlencoded({ extended: true }));

app.use(routes);

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
