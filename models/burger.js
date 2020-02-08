const orm = require("./../config/orm");

const table = "burgers";

const burger = {
    selectAll: function(cb) {
        orm.selectAll(table, function(res) {
            cb(res);
        });
    },

    insertOne: function(cols, vals, cb) {
        orm.insertOne(table, cols, vals, function(res) {
            cb(res);
        });
    },

    updateOne: function(condition, setCol, cb) {
        orm.updateOne(table, condition, setCol, function(res) {
            cb(res);
        });
    }
};

module.exports = burger;