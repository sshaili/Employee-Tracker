var mysql = require("mysql");



    var connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "Pa55w0rd",
        database: "employeeTracker"
      });
    
connection.connect(function(err) {
        if (err) throw err;
        console.log("connected as id " );
      });
      




module.exports = connection;