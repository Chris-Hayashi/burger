const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "burgers_db"
});

connection.connect(function(err) {
    if (err) throw err;
    else console.log("Connected to burgers_db!");
});

module.exports = connection;