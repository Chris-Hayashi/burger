const connection = require("./connection");

const orm = {
    
    selectAll: function(table, cb) {
        const query = "SELECT * FROM ??";
        connection.query(query, table, function(err, res) {
            if (err) throw err;
            cb(res);
        });
    },

    insertOne: function(table, cols, vals, cb) {
        const query = "INSERT INTO ??(??) VALUES(?)";
        // console.log(cols.toString());
        connection.query(query, [table, cols, vals], function(err, res) {
            if (err) throw err;
            console.log("Burger successfully inserted into database");
            cb(res);
        });
    },

    updateOne: function(table, col, colVal, setCol, cb) {
        const query = "UPDATE ?? WHERE ?? = ? SET ?? = ?";
        connection.query(query, [table, col, colVal, setCol, false], function(err, res) {
            if (err) throw err;
            console.log("Burger successfully updated in database");
            cb(res);
        })
    }
};

module.exports = orm;