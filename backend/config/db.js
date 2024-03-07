const mysql = require("mysql2");

require("dotenv").config();

// console.log(process.env.HOST);
// console.log(process.env.USER);
// console.log(process.env.PASSWORD);
// console.log(process.env.DATABASE);

const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "123456",
//   database: "authenticationSystem",
// });

connection.connect((err) => {
  if (err) {
    console.log("Error connecting to MySQL database:", err);
    return;
  } else {
    console.log("Connected to MySQL database");
  }
});

module.exports = connection;
