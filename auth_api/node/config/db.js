const mysql = require("mysql");

const conn = mysql.createConnection({
  host: "bootcamp-tht.sre.wize.mx",
  user: "secret",
  password: "noPow3r",
  database: "bootcamp_tht",
  port: "3306",
});

conn.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + conn.threadId);
});

module.exports = conn;
