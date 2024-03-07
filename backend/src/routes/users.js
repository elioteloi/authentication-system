// routes/users.js
const express = require("express");
const cors = require("cors");
const connection = require("../../config/db");

const router = express.Router();

// Enable CORS for all routes
router.use(cors());

// Parse JSON bodies for POST requests
router.use(express.json());

// Parse URL-encoded bodies for POST requests
router.use(express.urlencoded({ extended: true }));

router.post("/dataGet", (req, res) => {
  const { email, password } = req.body;
  connection.query(
    "INSERT INTO user (email, password) VALUES (?, ?)",
    [email, password],
    (error, results) => {
      if (error) {
        console.error("Error inserting data:", error);
        return;
      } else {
        console.log("Data inserted successfully:", results);
      }
    }
  );
  console.log(req.body);
  console.log("email: ", req.body.email);
  console.log("password: ", req.body.password);
  res.send("Data received successfully");
});

router.get("/dataPost", (req, res) => {
  connection.query("SELECT * FROM user", (error, results) => {
    if (error) {
      console.log("Error fetching data", error);
    } else {
      res.send(results);
      console.log("Data fetched sucessfully", results);
    }
  });
});

module.exports = router;
