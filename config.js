/** MYSQL Connection **/
const Mysql = require("mysql");

var connection = Mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "lance0113", 
  database: "sampledb", // database name
  port: 3306,
});

connection.connect(function (err) {
  if (err) throw err;
});

module.exports = connection;
