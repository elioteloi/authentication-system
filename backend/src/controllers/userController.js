const connection = require("../../config/db");

function createUser(req, res) {
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
}

function fetchUser(req, res) {
  connection.query("SELECT * FROM user", (error, results) => {
    if (error) {
      res.body.id;
      console.log("Error fetching data", error);
    } else {
      res.send(results);
      console.log("Data fetched sucessfully", results);
    }
  });
}

module.exports = { createUser, fetchUser };
