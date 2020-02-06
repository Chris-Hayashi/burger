const orm = require("./../config/orm");

const table = "burgers";

const burger = {
    selectAll: function() {
        return orm.selectAll(table);
    },

    insertOne: function(cols, vals) {
        orm.insertOne(table, cols, vals);
    },

    updateOne: function(col, colVal, setCol, setColVal) {
        orm.updateOne(table, col, colVal, setCol, setColVal);
    }
};

module.exports = burger;