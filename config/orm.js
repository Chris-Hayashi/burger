const connection = require("./connection");

const orm = {
    
    selectAll: function(table, cb) {
        const query = "SELECT * FROM ?";
        connection.query(query, [table], function(err, res) {
            if (err) throw err;
            cb(res);
        });
    },

    insertOne: function(table, cols, vals, cb) {
        const query = "INSERT INTO ?(?) VALUES(?)";
        connection.query(query, [table, cols.toString(), vals.toString()], function(err, res) {
            if (err) throw err;
            console.log("Burger successfully inserted into database");
            cb(res);
        });
    },

    updateOne: function(table, col, colVal, setCol, setColVal, cb) {
        const query = "UPDATE ? WHERE ? = ?? SET ? = ??";
        connection.query(query, [table, col, colVal, setCol, setColVal], function(err, res) {
            if (err) throw err;
            console.log("Burger successfully updated in database");
            cb(res);
        })
    }
};

module.exports = orm;