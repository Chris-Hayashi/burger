// Set up MySQL connection.
const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "m7nj9dclezfq7ax1.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "	zz5ut10iny1rltkn",
    password: "s6j008l5gwwvdnxx",
    database: "ilpl9twmyfxqexij"
});

// Make connection
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection
module.exports = connection;