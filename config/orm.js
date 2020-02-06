const connection = require("./connection");

const orm = {
    
    selectAll: function(table) {
        const query = "SELECT * FROM ?";
        connection.query(query, [table], function(err, res) {
            if (err) throw err;
            return res;
        });
    },

    insertOne: function(table, cols, vals) {
        const query = "INSERT INTO ?(?) VALUES(?)";
        connection.query(query, [table, cols, vals], function(err, res) {
            if (err) throw err;
            console.log("Burger successfully inserted into database");
        });
    },

    updateOne: function(table, col, colVal, setCol, setColVal) {
        const query = "UPDATE ? WHERE ? = ?? SET ? = ??";
        connection.query(query, [table, col, colVal, setCol, setColVal], function(err, res) {
            if (err) throw err;
            console.log("Burger successfully updated in database");
        })
    }
};

module.exports = orm;