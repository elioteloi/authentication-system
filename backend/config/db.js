// config/db.js
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "authenticationSystem",
});

connection.connect((err) => {
  if (err) {
    console.log("Error connecting to MySQL database:", err);
    return;
  } else {
    console.log("Connected to MySQL database");
  }
});

module.exports = connection;
