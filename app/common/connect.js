var mysql = require('mysql');
var conn = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "",
  database: "doanthaylam"
});
conn.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports=conn