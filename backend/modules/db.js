const mysql = require("mysql");

// open a connection to the db
const connection = mysql.createConnection({
  host: "localhost",
  user: "pinnacle",
  password: "password@p1nnacle2021@Dalla5",
  database: "MokoDB"
});

connection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the Moko database.");
});

module.exports = connection;
